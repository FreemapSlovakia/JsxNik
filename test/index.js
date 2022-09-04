const test = require("tape");
const { serialize } = require("../dist/serialize.js");
const { jsx } = require("../dist/jsx-runtime.js");

test("Produce valid markup", (t) => {
  t.plan(3);

  t.equal(
    serialize(jsx("Foo", { children: [jsx("Bar", { hello: "world" }), jsx("Baz", {})] })),
    '<Foo><Bar hello="world"/><Baz/></Foo>'
  );

  t.equal(
    serialize(jsx("Foo", { children: "<Bar/>" })),
    "<Foo>&lt;Bar/&gt;</Foo>"
  );

  t.equal(
    serialize(jsx("Raw", { children: "<Foo/>" })),
    "<Foo/>"
  );
});
