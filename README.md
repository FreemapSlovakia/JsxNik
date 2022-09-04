# JsxNik

Create [Mapnik](https://mapnik.org) configuration with [JSX](https://facebook.github.io/jsx/) and included code autocompletion and type validation support, thanks to [TypeScript](https://www.typescriptlang.org).

## Usage

1. create a new TypeScript project and install JsxNik (`npm i jsxnik`).
1. Add following lines to your `tsconfig.json`:
   ```json
   "jsx": "react-jsx",
   "jsxImportSource": "jsxnik"
   ```
1. create and use Mapnik configuration; `sample.tsx`:
   ```tsx
   import { serialize } from "jsxnik/serialize";
   import { Datasource, Map, Parameter, Style, Rule, PolygonSymbolizer, Layer, StyleName } from "jsxnik/mapnikConfig";

   const mapnikConfig = serialize(
     <Map backgroundColor="blue">
       <Datasource>
         <Parameter name="type">sqlite</Parameter>
         <Parameter name="file">map.sqlite</Parameter>
       </Datasource>

       <Style name="some_style">
         <Rule>
           <PolygonSymbolizer fill="green" />
         </Rule>

         {/* this is a comment */}

         {/* including markup as a string */}
         <Raw>{`
           <Rule>
             <PolygonSymbolizer fill="green" />
           </Rule>
         `}</Raw>
       </Style>

       <Layer srs="+init=epsg:3857">
        <StyleName>some_style</StyleName>

        <Datasource base="db">
          <Parameter name="table">
            some_table
          </Parameter>
        </Datasource>
       </Layer>
     </Map>
   );

   ```

TODO instruction for JavaScript-only projects by using Babel
