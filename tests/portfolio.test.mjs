import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [html, script] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../script.js", import.meta.url), "utf8")
]);

const projectNames = [
  "DITC CAT",
  "Dear Days",
  "Smart City Management Platform",
  "CrowdLens",
  "ClassSync",
  "The Commons",
  "AERIS",
  "Chiang Mai Smart City",
  "Smart-FLEMA",
  "AgriLink"
];

test("includes every verified portfolio project", () => {
  for (const projectName of projectNames) {
    assert.ok(script.includes(projectName), `Missing project: ${projectName}`);
  }
});

test("contains the required data-driven project fields", () => {
  const fields = [
    "title", "shortDescription", "problem", "role", "responsibilities",
    "technologies", "status", "teamType", "year", "repository", "demo",
    "images", "featured"
  ];

  for (const field of fields) {
    assert.match(script, new RegExp(`\\b${field}:`), `Missing project field: ${field}`);
  }
});

test("keeps sensitive project claims within verified scope", () => {
  const smartFlema = script.slice(script.indexOf('id: "smart-flema"'), script.indexOf('id: "agrilink"'));
  const chiangMai = script.slice(script.indexOf('id: "chiang-mai-smart-city"'), script.indexOf('id: "smart-flema"'));
  const lampang = script.slice(script.indexOf('id: "lampang-smart-city"'), script.indexOf('id: "crowdlens"'));

  assert.match(smartFlema, /Hackathon concept only/);
  assert.match(smartFlema, /No computer-vision system, dashboard, IoT integration, heatmap, or alerting software was implemented/);
  assert.match(chiangMai, /mock prototype data/);
  assert.match(chiangMai, /not presented as deployed municipal software/);
  assert.match(lampang, /municipal CCTV API and live camera feed have not been provided/);
});

test("removes placeholder and misleading portfolio content", () => {
  const content = `${html}\n${script}`;
  const forbidden = [
    /first-year student/i,
    /message sent successfully/i,
    /upload real screenshots later/i,
    /href=["']#["']/i,
    /facebook\.com/i,
    /youtube\.com/i,
    /x\.com/i,
    /dribbble/i,
    /behance/i
  ];

  for (const pattern of forbidden) {
    assert.doesNotMatch(content, pattern);
  }
});

test("resolves every internal navigation anchor", () => {
  const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]));
  const anchors = [...html.matchAll(/href=["']#([^"']+)["']/g)].map((match) => match[1]);

  assert.ok(anchors.length > 0);
  for (const anchor of anchors) {
    assert.ok(ids.has(anchor), `Missing target for #${anchor}`);
  }
});

test("publishes canonical, social, and structured metadata", () => {
  assert.match(html, /rel="canonical"/);
  assert.match(html, /property="og:title"/);
  assert.match(html, /property="og:description"/);
  assert.match(html, /type="application\/ld\+json"/);
  assert.match(html, /"@type": "Person"/);
});
