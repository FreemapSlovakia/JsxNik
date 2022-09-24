declare global {
  namespace JSX {
    interface IntrinsicElements {}

    interface ElementChildrenAttribute {
      children: {};
    }

    type Element =
      | undefined
      | string
      | boolean
      | number
      | {
          elem: string | undefined;
          props: { children?: string | string[]; [key: string]: unknown };
        }
      | Element[];
  }
}

export const Raw = "Raw" as unknown as (props: {
  children: JSX.Element;
}) => JSX.Element;

export const Rule = "Rule" as unknown as (props: {
  children: JSX.Element;
}) => JSX.Element;

export const Filter = "Filter" as unknown as (props: {
  children: JSX.Element;
}) => JSX.Element;

export const StyleName = "StyleName" as unknown as (props: {
  children: JSX.Element;
}) => JSX.Element;

export const Datasource = "Datasource" as unknown as (props: {
  name?: string;
  base?: string;
  children: JSX.Element;
}) => JSX.Element;

export const Parameter = "Parameter" as unknown as (props: {
  name: string;
  children: JSX.Element;
}) => JSX.Element;

export const Font = "Font" as unknown as (props: {
  faceName: string;
}) => JSX.Element;

export const FontSet = "FontSet" as unknown as (props: {
  name: string;
  children: JSX.Element;
}) => JSX.Element;

export const MinScaleDenominator = "MinScaleDenominator" as unknown as (props: {
  children: number;
}) => JSX.Element;

export const MaxScaleDenominator = "MaxScaleDenominator" as unknown as (props: {
  children: number;
}) => JSX.Element;

export const Placement = "Placement" as unknown as (props: {
  size?: number | string;
  dx?: number | string;
  dy?: number | string;
  fill?: string;
  children?: string;
  upright?: "right_only";
  characterSpacing?: number | string;
}) => JSX.Element;

export const Layout = "Layout" as unknown as (props: {
  dx?: number | string;
  dy?: number | string;
  children?: string;
}) => JSX.Element;

export const Format = "Format" as unknown as typeof TextSymbolizer; // TODO check if all attributes are supported

export const Style = "Style" as unknown as (props: {
  name?: string;

  /**
   * Control the processing behavior of Rule filters within a Style. If 'all' is used then all Rules are processed sequentially independent of whether any previous filters matched. If 'first' is used then it means processing ends after the first match (a positive filter evaluation) and no further Rules in the Style are processed ('first' is usually the default for CSS implementations on top of Mapnik to simplify translation from CSS to Mapnik XML).
   *
   * Expression: false
   *
   * Default value: all
   *
   * Default meaning: All Rules in a Style are processed whether they have filters or not and whether or not the filter conditions evaluate to true.
   */
  filterMode?: "all" | "first";

  /**
   * A list of image filters that will be applied to the active rendering canvas for a given style. The presence of one more `image-filters` will trigger a new canvas to be created before starting to render a style and then this canvas will be composited back into the main canvas after rendering all features and after all `image-filters` have been applied. See `direct-image-filters` if you want to apply a filter directly to the main canvas.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: no filters
   */
  imageFilters?: string;

  /**
   * A property that can be set to true to enable using an inflated image internally for seamless blurring across tiles (requires buffered data).
   *
   * Expression: false
   *
   * Default value: false
   *
   * Default meaning: No special handling will be done and image filters that blur data will only blur up to the edge of a tile boundary
   */
  imageFiltersInflate?: boolean;

  /**
   * A list of image filters to apply to the main canvas (see the `image-filters` doc for how they work on a separate canvas).
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: no filters
   */
  directImageFilters?: string;

  /**
   * Composite operation. This defines how this layer should behave relative to layers atop or below it.
   *
   * Expression: false
   *
   * Default value: src-over
   *
   * Default meaning: add the current layer on top of other layers
   */
  compOp?: CompOp;

  /**
   * An alpha value for the style (which means an alpha applied to all features in separate buffer and then composited back to main buffer).
   *
   * Expression: false
   *
   * Default value: 1
   *
   * Default meaning: No separate buffer will be used and no alpha will be applied to the style after rendering.
   */
  opacity?: number;

  children: JSX.Element;
}) => JSX.Element;

export const Layer = "Layer" as unknown as (props: {
  compOp?: string;
  opacity?: number;

  /**
   * The name of a layer. Can be anything you wish and is not strictly validated, but ideally unique  in the map.
   *
   * Expression: false
   * Default value:
   *
   * Default meaning: No layer name has been provided
   */
  name?: string;

  /**
   * The spatial reference system definition for the layer, aka the projection. Can either be a proj4 literal string like '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs' or, if the proper proj4 epsg/nad/etc identifier files are installed, a string that uses an id like: '+init=epsg:4326'.
   *
   * Expression: false
   * Default value:
   *
   * Default meaning: No srs value is provided and the value will be inherited from the Map's srs
   */
  srs?: string;

  /**
   * A property that can be set to false to disable this layer from being processed.
   *
   * Expression: false
   *
   * Default value: true
   *
   * Default meaning: This layer will be marked as active and available for processing
   */
  status?: boolean;

  /**
   * The minimum scale denominator that this layer will be visible at. A layer's visibility is determined by whether its status is true and if the Map scale >= minzoom - 1e-6 and scale < maxzoom + 1e-6. This option has been deprecated in favor of `minimum-scale-denominator`.
   *
   * Expression: false
   *
   * Default value: 0
   *
   * Default meaning: The layer will be visible at the minimum possible scale
   */
  minzoom?: number;

  /**
   * The maximum scale denominator that this layer will be visible at. The default is the numeric limit of the C++ double type, which may vary slightly by system, but is likely a massive number like 1.79769e+308 and ensures that this layer will always be visible unless the value is reduced. A layer's visibility is determined by whether its status is true and if the Map scale >= minzoom - 1e-6 and scale < maxzoom + 1e-6. This option has been deprecated in favor of `maximum-scale-denominator`.
   *
   * Expression: false
   *
   * Default value: 1.79769e+308
   *
   * Default meaning: The layer will be visible at the maximum possible scale
   */
  maxzoom?: number;

  /**
   * The minimum scale denominator that this layer will be visible at. A layer's visibility is determined by whether its status is true and if the Map scale denominator >= `minimum-scale-denominator` - 1e-6 and scale denominator < 'maximum-scale-denominator' + 1e-6.
   *
   * Expression: false
   *
   * Default value: 0
   *
   * Default meaning: The layer will be visible at the minimum possible scale denominator
   */
  minimumScaleDenominator?: number;

  /**
   * The maximum scale denominator that this layer will be visible at. The default is the numeric limit of the C++ double type, which may vary slightly by system, but is likely a massive number like 1.79769e+308 and ensures that this layer will always be visible unless the value is reduced. A layer's visibility is determined by whether its status is true and if the Map scale denominator >= `minimum-scale-denominator` - 1e-6 and scale denominator < `maximum-scale-denominator` + 1e-6.
   *
   * Expression: false
   *
   * Default value: 1.79769e+308
   *
   * Default meaning: The layer will be visible at the maximum possible scale denominator
   */
  maximumScaleDenominator?: number;

  /**
   * This property was added for GetFeatureInfo/WMS compatibility and is rarely used. It is off by default meaning that in a WMS context the layer will not be able to be queried unless the property is explicitly set to true.
   *
   * Expression: false
   *
   * Default value: false
   *
   * Default meaning: The layer will not be available for the direct querying of data values
   */
  queryable?: boolean;

  /**
   * This property, by default off, can be enabled to allow a user to clear the collision detector cache before a given layer is processed. This may be desirable to ensure that a given layers data shows up on the map even if it normally would not because of collisions with previously rendered labels or markers.
   *
   * Expression: false
   *
   * Default value: false
   *
   * Default meaning: The renderer's collision detector cache (used for avoiding duplicate labels and overlapping markers) will not be cleared immediately before processing this layer
   */
  clearLabelCache?: boolean;

  /**
   * https://github.com/mapnik/mapnik/wiki/Grouped-rendering
   *
   * Expression: false
   * Default value:
   *
   * Default meaning: No special layer grouping will be used during rendering
   */
  groupBy?: string;

  /**
   * Extra tolerance around the Layer extent (in pixels) used when querying the layer data during rendering. If set this will override the Map buffer-size.
   *
   * Expression: false
   *
   * Default value: 0
   *
   * Default meaning: No custom buffer will be used for the layer and rather the Map buffer-size will be used
   */
  bufferSize?: number;

  /**
   * An extent to be used to limit the bounds used to query this specific layer data during rendering. Should be minx, miny, maxx, maxy in the coordinates of the Layer.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: No clipping extent will be used
   */
  maximumExtent?: number[];

  /**
   * Setting this to `on` triggers Mapnik to attempt to cache features in memory for rendering when (and only when) a layer has multiple styles attached to it.
   *
   * Expression: false
   *
   * Default value: off
   *
   * Default meaning: Features are not cached between rendering multiple styles. The datasource is queried for each style.
   */
  cacheFeatures?: boolean;

  children: JSX.Element;
}) => JSX.Element;

export const Map = "Map" as unknown as (props: {
  /**
   * Map Background color.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: Will be rendered transparent.
   */
  backgroundColor?: string;

  /**
   * An image that is repeated below all features on a map as a background. Accepted formats: svg, jpg, png, tiff, and webp.
   *
   * Expression: false
   * Default value:
   *
   * Default meaning: No background image will be used.
   */
  backgroundImage?: string;

  /**
   * Set the compositing operation used to blend the image into the background.
   *
   * Expression: false
   *
   * Default value: src-over
   *
   * Default meaning: The background-image will be blended with the background normally (placed on top of any existing background-color).
   */
  backgroundImageCompOp?: CompOp;

  /**
   * Set the opacity of the image.
   *
   * Expression: false
   *
   * Default value: 1
   *
   * Default meaning: The image opacity will not be changed when applied to the map background.
   */
  backgroundImageOpacity?: number;

  /**
   * Map spatial reference (proj4 string).
   *
   * Expression: false
   *
   * Default value: +proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs
   *
   * Default meaning: The proj4 literal of EPSG:4326 is assumed to be the Map's spatial reference and all data from layers within this map will be plotted using this coordinate system. If any layers do not declare an srs value then they will be assumed to be in the same srs as the Map and not transformations will be needed to plot them in the Map's coordinate space.
   */
  srs?: string;

  /**
   * Extra tolerance around the map (in pixels) used to ensure labels crossing tile boundaries are equally rendered in each tile (e.g. cut in each tile). Not intended to be used in combination with "avoid-edges".
   *
   * Expression: false
   *
   * Default value: 0
   *
   * Default meaning: No buffer will be used.
   */
  bufferSize?: number;

  /**
   * An extent to be used to limit the bounds used to query all layers during rendering. Should be minx, miny, maxx, maxy in the coordinates of the Map.
   *
   * Expression: false
   *
   * Default value: -20037508.34,-20037508.34,20037508.34,20037508.34
   *
   * Default meaning: All data will be clipped to global mercator extent (default is applied in Carto.js).
   */
  maximumExtent?: string;

  /**
   * Any relative paths used to reference files will be understood as relative to this directory path if the map is loaded from an in memory object rather than from the filesystem. If the map is loaded from the filesystem and this option is not provided it will be set to the directory of the stylesheet.
   *
   * Expression: false
   * Default value:
   *
   * Default meaning: This base path defaults to an empty string meaning that any relative paths to files referenced in styles or layers will be interpreted relative to the application process.
   */
  base?: string;

  /**
   * Value to control whether paths in the XML will be interpreted from the location of the XML or from the working directory of the program that calls load_map().
   *
   * Expression: false
   *
   * Default value: true
   *
   * Default meaning: Paths read from XML will be interpreted from the location of the XML.
   */
  pathsFromXml?: boolean;

  /**
   * The minumum Mapnik version (e.g. 0.7.2) needed to use certain functionality in the stylesheet.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: Mapnik version will not be detected and no error will be thrown about compatibility.
   */
  minimumVersion?: string;

  /**
   * Path to a directory which holds fonts which should be registered when the Map is loaded (in addition to any fonts that may be automatically registered).
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: No map-specific fonts will be registered.
   */
  fontDirectory?: string;

  children?: JSX.Element;
}) => JSX.Element;

export const PolygonSymbolizer = "PolygonSymbolizer" as unknown as (props: {
  /**
   * Allows omitting a polygon symbolizer rule or emitting it with default values.
   *
   * Expression: false
   *
   * Default value: undefined
   *
   * Default meaning: undefined
   */
  default?: "auto" | "none";

  /**
   * Fill color to assign to a polygon.
   *
   * Expression: true
   *
   * Default value: rgba(128,128,128,1)
   *
   * Default meaning: Gray and fully opaque (alpha = 1), same as rgb(128,128,128) or rgba(128,128,128,1).
   */
  fill?: string;

  /**
   * The opacity of the polygon.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Color is fully opaque.
   */
  fillOpacity?: string | number;

  /**
   * Level of antialiasing of polygon edges.
   *
   * Expression: true
   * Range: 0-1
   *
   * Default value: 1
   *
   * Default meaning: Fully antialiased.
   */
  gamma?: number;

  /**
   * An Antigrain Geometry specific rendering hint to control the quality of antialiasing. Under the hood in Mapnik this method is used in combination with the 'gamma' value (which defaults to 1). The methods are in the AGG source at https://github.com/mapnik/mapnik/blob/master/deps/agg/include/agg_gamma_functions.
   *
   * Expression: true
   *
   * Default value: power
   *
   * Default meaning: pow(x,gamma) is used to calculate pixel gamma, which produces slightly smoother line and polygon antialiasing than the 'linear' method, while other methods are usually only used to disable AA.
   */
  gammaMethod?: string | "power" | "linear" | "none" | "threshold" | "multiply";

  /**
   * Turning on clipping can help performance in the case that the boundaries of the geometry extend outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: The geometry will not be clipped to map bounds before rendering.
   */
  clip?: string | boolean;

  /**
   * Simplify geometries by the given tolerance.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: geometry will not be simplified.
   */
  simplify?: string | number;

  /**
   * Simplify geometries by the given algorithm.
   *
   * Expression: true
   *
   * Default value: radial-distance
   *
   * Default meaning: The geometry will be simplified using the radial distance algorithm.
   */
  simplifyAlgorithm?:
    | string
    | "radial-distance"
    | "zhao-saalfeld"
    | "visvalingam-whyatt"
    | "douglas-peucker";

  smoothAalgorithm?: "string" | "adaptive" | "basic" | "";

  /**
   * Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries.
   *
   * Expression: true
   * Range: 0-1
   *
   * Default value: 0
   *
   * Default meaning: No smoothing.
   */
  smooth?: string | number;

  /**
   * Transform polygon geometry with specified function.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: The geometry will not be transformed.
   */
  geometryTransform?: string;

  /**
   * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
   *
   * Expression: true
   *
   * Default value: src-over
   *
   * Default meaning: Add the current symbolizer on top of other symbolizer.
   */
  compOp?: string | CompOp;
}) => JSX.Element;

export const LineSymbolizer = "LineSymbolizer" as unknown as (props: {
  /**
   * Allows omitting a line symbolizer rule or emitting it with default values.
   *
   * Expression: false
   *
   * Default value: undefined
   *
   * Default meaning: undefined
   */
  default?: "auto" | "none";

  /**
   * The color of a drawn line.
   *
   * Expression: true
   *
   * Default value: black
   *
   * Default meaning: black and fully opaque (alpha = 1), same as rgb(0,0,0) or rgba(0,0,0,1).
   */
  stroke?: string;

  /**
   * The width of a line in pixels.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: The line will be rendered 1 pixel wide.
   */
  strokeWidth?: string | number;

  /**
   * The opacity of a line.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Color is fully opaque.
   */
  strokeOpacity?: string | number;

  /**
   * The behavior of lines when joining.
   *
   * Expression: true
   *
   * Default value: miter
   *
   * Default meaning: The line joins will be rendered using a miter look.
   */
  strokeLinejoin?: string | "miter" | "miter-revert" | "round" | "bevel";

  /**
   * The display of line endings.
   *
   * Expression: true
   *
   * Default value: butt
   *
   * Default meaning: The line endings will be rendered using a butt look.
   */
  strokeLinecap?: string | "butt" | "round" | "square";

  /**
   * Level of antialiasing of stroke line.
   *
   * Expression: true
   * Range: 0-1
   *
   * Default value: 1
   *
   * Default meaning: Fully antialiased.
   */
  strokeGamma?: string | number;

  /**
   * An Antigrain Geometry specific rendering hint to control the quality of antialiasing. Under the hood in Mapnik this method is used in combination with the 'gamma' value (which defaults to 1). The methods are in the AGG source at https://github.com/mapnik/mapnik/blob/master/deps/agg/include/agg_gamma_functions.
   *
   * Expression: true
   *
   * Default value: power
   *
   * Default meaning: pow(x,gamma) is used to calculate pixel gamma, which produces slightly smoother line and polygon antialiasing than the 'linear' method, while other methods are usually only used to disable AA.
   */
  strokeGammaMethod?:
    | string
    | "power"
    | "linear"
    | "none"
    | "threshold"
    | "multiply";

  /**
   * A pair of length values [a,b], where (a) is the dash length and (b) is the gap length respectively. More than two values are supported for more complex patterns.
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning: The line will be drawn without dashes.
   */
  strokeDasharray?: string | number[];

  /**
   * Valid parameter but not currently used in renderers (only exists for experimental svg support in Mapnik which is not yet enabled).
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning: The line will be drawn without dashes.
   */
  strokeDashoffset?: string | number[];

  /**
   * The limit on the ratio of the miter length to the stroke-width. Used to automatically convert miter joins to bevel joins for sharp angles to avoid the miter extending beyond the thickness of the stroking path. Normally will not need to be set, but a larger value can sometimes help avoid jaggy artifacts.
   *
   * Expression: true
   *
   * Default value: 4
   *
   * Default meaning: Will auto-convert miters to bevel line joins when theta is less than 29 degrees as per the SVG spec: 'miterLength / stroke-width = 1 / sin ( theta / 2 )'.
   */
  strokeMiterlimit?: string | number;

  /**
   * Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: The geometry will not be clipped to map bounds before rendering.
   */
  clip?: string | boolean;

  /**
   * Simplify geometries by the given tolerance.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: geometry will not be simplified.
   */
  simplify?: string | number;

  /**
   * Simplify geometries by the given algorithm.
   *
   * Expression: true
   *
   * Default value: radial-distance
   *
   * Default meaning: The geometry will be simplified using the radial distance algorithm.
   */
  simplifyAlgorithm?:
    | string
    | "radial-distance"
    | "zhao-saalfeld"
    | "visvalingam-whyatt"
    | "douglas-peucker";

  smoothAalgorithm?: "string" | "adaptive" | "basic" | "";

  /**
   * Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries.
   *
   * Expression: true
   * Range: 0-1
   *
   * Default value: 0
   *
   * Default meaning: No smoothing.
   */
  smooth?: string | number;

  /**
   * Offsets a line a number of pixels parallel to its actual path. Positive values move the line left, negative values move it right (relative to the directionality of the line).
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Will not be offset.
   */
  offset?: string | number;

  /**
   * Exposes an alternate AGG rendering method that sacrifices some accuracy for speed.
   *
   * Expression: true
   *
   * Default value: full
   *
   * Default meaning: The line will be rendered using the highest quality method rather than the fastest.
   */
  rasterizer?: string | "full" | "fast";

  /**
   * Transform line geometry with specified function.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: The geometry will not be transformed.
   */
  geometryTransform?: string;

  /**
   * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
   *
   * Expression: true
   *
   * Default value: src-over
   *
   * Default meaning: Add the current symbolizer on top of other symbolizer.
   */
  compOp?: string | CompOp;
}) => JSX.Element;

export const MarkersSymbolizer = "MarkersSymbolizer" as unknown as (props: {
  spacingOffset?: number | string;

  /**
   * Allows omitting a marker symbolizer rule or emitting it with default values.
   *
   * Expression: false
   *
   * Default value: undefined
   *
   * Default meaning: undefined
   */
  default?: "auto" | "none";

  /**
   * A file that this marker shows at each placement. If no file is given, the marker will show an ellipse. Accepted formats: svg, jpg, png, tiff, and webp.
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning: An ellipse or circle, if width equals height.
   */
  file?: string;

  /**
   * The overall opacity of the marker, if set, overrides both the opacity of the fill and the opacity of the stroke.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: The stroke-opacity and fill-opacity of the marker.
   */
  opacity?: string | number;

  /**
   * The fill opacity of the marker. This property will also set the `fill-opacity` of elements in an SVG loaded from a file.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Color is fully opaque.
   */
  fillOpacity?: string | number;

  /**
   * The color of the stroke around the marker. This property will also set the `stroke` of elements in an SVG loaded from a file.
   *
   * Expression: true
   *
   * Default value: black
   *
   * Default meaning: The marker will be drawn with a black outline.
   */
  stroke?: string;

  /**
   * The width of the stroke around the marker, in pixels. This is positioned on the boundary, so high values can cover the area itself. This property will also set the `stroke-width` of elements in an SVG loaded from a file.
   *
   * Expression: true
   *
   * Default value: 0.5
   *
   * Default meaning: The marker will be drawn with an outline of .5 pixels wide.
   */
  strokeWidth?: string | number;

  /**
   * The opacity of a line.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Color is fully opaque. This property will also set the `stroke-opacity` of elements in an SVG loaded from a file.
   */
  strokeOpacity?: string | number;

  /**
   * Attempt to place markers on a point, in the center of a polygon, or if markers-placement:line, then multiple times along a line. 'interior' placement can be used to ensure that points placed on polygons are forced to be inside the polygon interior. The 'vertex-first' and 'vertex-last' options can be used to place markers at the first or last vertex of lines or polygons.
   *
   * Expression: true
   *
   * Default value: point
   *
   * Default meaning: Place markers at the center point (centroid) of the geometry.
   */
  placement?:
    | string
    | "point"
    | "line"
    | "interior"
    | "vertex-first"
    | "vertex-last";

  /**
   * A special setting to allow the user to control rendering behavior for 'multi-geometries' (when a feature contains multiple geometries). This setting does not apply to markers placed along lines. The 'each' policy is default and means all geometries will get a marker. The 'whole' policy means that the aggregate centroid between all geometries will be used. The 'largest' policy means that only the largest (by bounding box areas) feature will get a rendered marker (this is how text labeling behaves by default).
   *
   * Expression: true
   *
   * Default value: each
   *
   * Default meaning: If a feature contains multiple geometries and the placement type is either point or interior then a marker will be rendered for each.
   */
  multiPolicy?: string | "each" | "whole" | "largest";

  /**
   * The default marker-type. If a SVG file is not given as the marker-file parameter, the renderer provides either an arrow or an ellipse (a circle if height is equal to width).
   *
   * Expression: true
   *
   * Default value: ellipse
   *
   * Default meaning: The marker shape is an ellipse.
   */
  markerType?: string | "arrow" | "ellipse";

  /**
   * The width of the marker, if using one of the default types.
   *
   * Expression: true
   *
   * Default value: 10
   *
   * Default meaning: The marker width is 10 pixels.
   */
  width?: string | number;

  /**
   * The height of the marker, if using one of the default types.
   *
   * Expression: true
   *
   * Default value: 10
   *
   * Default meaning: The marker height is 10 pixels.
   */
  height?: string | number;

  /**
   * The color of the area of the marker. This property will also set the `fill` of elements in an SVG loaded from a file.
   *
   * Expression: true
   *
   * Default value: blue
   *
   * Default meaning: The marker fill color is blue.
   */
  fill?: string;

  /**
   * Control whether overlapping markers are shown or hidden.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Do not allow markers to overlap with each other - overlapping markers will not be shown.
   */
  allowOverlap?: string | boolean;

  /**
   * Avoid placing markers that intersect with tile boundaries.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Markers will be potentially placed near tile edges and therefore may look cut off unless they are rendered on each adjacent tile.
   */
  avoidEdges?: string | boolean;

  /**
   * Value to control whether the placement of the feature will prevent the placement of other features.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: do not store the bbox of this geometry in the collision detector cache.
   */
  ignorePlacement?: string | boolean;

  /**
   * Space between repeated markers in pixels. If the spacing is less than the marker size or larger than the line segment length then no marker will be placed. Any value less than 1 will be ignored and the default will be used instead.
   *
   * Expression: true
   *
   * Default value: 100
   *
   * Default meaning: In the case of marker-placement:line then draw a marker every 100 pixels along a line.
   */
  spacing?: string | number;

  /**
   * N/A: not intended to be changed.
   *
   * Expression: true
   *
   * Default value: 0.2
   *
   * Default meaning: N/A: not intended to be changed.
   */
  maxError?: string | number;

  /**
   * Transform marker instance with specified function. Ignores map scale factor.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: No transformation.
   */
  transform?: string;

  /**
   * Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: The geometry will not be clipped to map bounds before rendering.
   */
  clip?: string | boolean;

  /**
   * geometries are simplified by the given tolerance.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Geometry will not be simplified.
   */
  simplify?: string | number;

  /**
   * geometries are simplified by the given algorithm.
   *
   * Expression: true
   *
   * Default value: radial-distance
   *
   * Default meaning: The geometry will be simplified using the radial distance algorithm.
   */
  simplifyAlgorithm?:
    | string
    | "radial-distance"
    | "zhao-saalfeld"
    | "visvalingam-whyatt"
    | "douglas-peucker";

  smoothAalgorithm?: "string" | "adaptive" | "basic" | "";

  /**
   * Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries.
   *
   * Expression: true
   * Range: 0-1
   *
   * Default value: 0
   *
   * Default meaning: No smoothing.
   */
  smooth?: string | number;

  /**
   * Transform marker geometry with specified function.
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning: The geometry will not be transformed.
   */
  geometryTransform?: string;

  /**
   * Offsets a marker from a line a number of pixels parallel to its actual path. Positive values move the marker left, negative values move it right (relative to the directionality of the line).
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Will not be offset.
   */
  offset?: string | number;

  /**
   * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
   *
   * Expression: true
   *
   * Default value: src-over
   *
   * Default meaning: Add the current symbolizer on top of other symbolizer.
   */
  compOp?: string | CompOp;

  /**
   * How markers should be placed along lines. With the "auto" setting when marker is upside down the marker is automatically rotated by 180 degrees to keep it upright. The "auto-down" value places marker in the opposite orientation to "auto". The "left" or "right" settings can be used to force marker to always be placed along a line in a given direction and therefore disables rotating if marker appears upside down. The "left-only" or "right-only" properties also force a given direction but will discard upside down markers rather than trying to flip it. The "up" and "down" settings don't adjust marker's orientation to the line direction.
   *
   * Expression: true
   *
   * Default value: right
   *
   * Default meaning: Markers are oriented to the right in the line direction.
   */
  direction?:
    | string
    | "auto"
    | "auto-down"
    | "left"
    | "right"
    | "left-only"
    | "right-only"
    | "up"
    | "down";
}) => JSX.Element;

export const ShieldSymbolizer = "ShieldSymbolizer" as unknown as (props: {
  fontsetName?: string;

  /**
   * Allows omitting a shield symbolizer rule.
   *
   * Expression: false
   *
   * Default value: undefined
   *
   * Default meaning: undefined
   */
  default?: "none";

  /**
   * Value to use for a shield"s text label. Data columns are specified using brackets like [column_name].
   *
   * Expression: true
   * Default value:
   *
   * Default meaning: No text label will be rendered with the shield.
   */
  name?: string;

  /**
   * Image file to render behind the shield text. Accepted formats: svg, jpg, png, tiff, and webp.
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning:
   */
  file?: string;

  /**
   * Font name and style to use for the shield text.
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning:
   */
  faceName?: string;

  /**
   * This parameter should be set to true if you are trying to position text beside rather than on top of the shield image.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: text alignment relative to the shield image uses the center of the image as the anchor for text positioning.
   */
  unlockImage?: string | boolean;

  /**
   * The size of the shield text in pixels.
   *
   * Expression: true
   *
   * Default value: 10
   *
   * Default meaning: Font size of 10 will be used to render text.
   */
  size?: string | number;

  /**
   * The color of the shield text.
   *
   * Expression: true
   *
   * Default value: black
   *
   * Default meaning: The shield text will be rendered black.
   */
  fill?: string;

  /**
   * How this shield should be placed. Point placement places one shield on top of a point geometry and at the centroid of a polygon or the middle point of a line, line places along lines multiple times per feature, vertex places on the vertexes of polygons, and interior attempts to place inside of a polygon.
   *
   * Expression: true
   *
   * Default value: point
   *
   * Default meaning: One shield will be placed per geometry.
   */
  placement?:
    | string
    | "point"
    | "line"
    | "vertex"
    | "interior"
    | "grid"
    | "alternating-grid";

  /**
   * Avoid placing shields that intersect with tile boundaries.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Shields will be potentially placed near tile edges and therefore may look cut off unless they are rendered on each adjacent tile.
   */
  avoidEdges?: string | boolean;

  /**
   * Control whether overlapping shields are shown or hidden.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Do not allow shields to overlap with other map elements already placed.
   */
  allowOverlap?: string | boolean;

  /**
   * Minimum distance that a shield can be placed from any other text, shield, or marker.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: No extra margin will be used to determine if a shield collides with any other text, shield, or marker.
   */
  margin?: string | number;

  /**
   * Minimum distance between repeated shields. If set this will prevent shields being rendered nearby each other that contain the same text. Similar to shield-min-distance with the difference that it works the same no matter what placement strategy is used.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Shields with the same text will be rendered without restriction.
   */
  repeatDistance?: string | number;

  /**
   * Minimum distance to any other collision object. Deprecated: replaced by `shield-margin`.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Shields with the same text will be rendered without restriction.
   */
  minimumDistance?: string | number;

  /**
   * Distance the renderer should use to try to place repeated shields on a line.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Only one shield per line will attempt to be placed.
   */
  spacing?: string | number;

  /**
   * Minimum distance a shield will be placed from the edge of a tile. This option is similar to shield-avoid-edges:true except that the extra margin is used to discard cases where the shield+margin are not fully inside the tile.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: No margin will be used to detect if a shield is nearby a tile boundary.
   */
  minimumPadding?: string | number;

  /**
   * Allows the shield to be displaced from its ideal position by a number of pixels (only works with placement:line).
   *
   * Expression: true
   *
   * Default value: shield-spacing/2.0
   *
   * Default meaning: If a shield cannot be placed then the renderer will advance by shield-spacing/2.0 to try placement again.
   */
  labelPositionTolerance?: string | number;

  /**
   * Length of a chunk of text in pixels before wrapping text. If set to zero, text doesn't wrap.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Text will not be wrapped.
   */
  wrapWidth?: string | number;

  /**
   * Wrap text before wrap-width is reached.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Wrapped lines will be a bit longer than wrap-width.
   */
  wrapBefore?: string | boolean;

  /**
   * Must be a single character. If you set it to other than the space character, Mapnik will wrap strictly on that character without involving any additional rules.
   *
   * Expression: true
   *
   * Default value: " "
   *
   * Default meaning: Lines will be wrapped conforming to the (untailored) Unicode Line Break Algorithm provided by ICU BreakIterator.
   */
  wrapCharacter?: string;

  /**
   * Specifies the color of the halo around the text.
   *
   * Expression: true
   *
   * Default value: white
   *
   * Default meaning: The shield halo text will be rendered white.
   */
  haloFill?: string;

  /**
   * Specify the radius of the halo in pixels.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: no halo.
   */
  haloRadius?: string | number;

  /**
   * Exposes an alternate text halo rendering method that sacrifices quality for speed.
   *
   * Expression: true
   *
   * Default value: full
   *
   * Default meaning: The shield will be rendered using the highest quality method rather than the fastest.
   */
  haloRasterizer?: string | "full" | "fast";

  /**
   * Transform shield halo relative to the actual text with specified function. Allows for shadow or embossed effects. Ignores map scale factor.
   *
   * Expression: false
   * Default value:
   *
   * Default meaning: No transformation.
   */
  haloTransform?: string;

  /**
   * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
   *
   * Expression: true
   *
   * Default value: src-over
   *
   * Default meaning: Add the current symbolizer on top of other symbolizer.
   */
  haloCompOp?: string | CompOp;

  /**
   * A number from 0 to 1 specifying the opacity for the text halo.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Fully opaque.
   */
  haloOpacity?: string | number;

  /**
   * Horizontal spacing between characters (in pixels). Currently works for point placement only, not line placement.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: The default character spacing of the font will be used.
   */
  characterSpacing?: string | number;

  /**
   * Vertical spacing between lines of multiline labels (in pixels).
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: The default font spacing will be used.
   */
  lineSpacing?: string | number;

  /**
   * Displace text within shield by fixed amount, in pixels, +/- along the X axis.  A positive value will shift the shield right.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Text will not be displaced.
   */
  dx?: string | number;

  /**
   * Displace text within shield by fixed amount, in pixels, +/- along the Y axis.  A positive value will shift the shield down.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Text will not be displaced.
   */
  dy?: string | number;

  /**
   * Displace shield by fixed amount, in pixels, +/- along the X axis.  A positive value will shift the text right.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Shield will not be displaced.
   */
  shieldDx?: string | number;

  /**
   * Displace shield by fixed amount, in pixels, +/- along the Y axis.  A positive value will shift the text down.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Shield will not be displaced.
   */
  shieldDy?: string | number;

  /**
   * The opacity of the image used for the shield.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Color is fully opaque.
   */
  opacity?: string | number;

  /**
   * The opacity of the text placed on top of the shield.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Color is fully opaque.
   */
  textOpacity?: string | number;

  /**
   * The shield's horizontal alignment from its centerpoint.
   *
   * Expression: true
   *
   * Default value: auto
   *
   * Default meaning: TODO.
   */
  horizontalAlignment?: string | "left" | "middle" | "right" | "auto";

  /**
   * The shield's vertical alignment from its centerpoint.
   *
   * Expression: true
   *
   * Default value: middle
   *
   * Default meaning: TODO.
   */
  verticalAlignment?: string | "top" | "middle" | "bottom" | "auto";

  /**
   * Re-position and/or re-size shield to avoid overlaps. "simple" for basic algorithm (using shield-placements string,) "dummy" to turn this feature off.
   *
   * Expression: true
   *
   * Default value: dummy
   *
   * Default meaning: Alternative placements will not be enabled.
   */
  placementType?: string | "dummy" | "simple" | "list";

  /**
   * If "placement-type" is set to "simple", use this "POSITIONS,[SIZES]" string. An example is `shield-placements: "E,NE,SE,W,NW,SW";`.
   *
   * Expression: true
   * Default value:
   *
   * Default meaning: No alternative placements will be used.
   */
  placements?: string | string;

  /**
   * Transform the case of the characters.
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning: No text transformation will be applied.
   */
  textTransform?:
    | string
    | "none"
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "reverse";

  /**
   * Define how text in a shield's label is justified.
   *
   * Expression: true
   *
   * Default value: auto
   *
   * Default meaning: TODO.
   */
  justifyAlignment?: string | "left" | "center" | "right" | "auto";

  /**
   * Transform shield instance with specified function. Ignores map scale factor.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: No transformation.
   */
  transform?: string;

  /**
   * Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: The geometry will not be clipped to map bounds before rendering.
   */
  clip?: string | boolean;

  /**
   * Simplify the geometries used for shield placement by the given tolerance.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: geometry will not be simplified.
   */
  simplify?: string | number;

  /**
   * Simplify the geometries used for shield placement by the given algorithm.
   *
   * Expression: true
   *
   * Default value: radial-distance
   *
   * Default meaning: The geometry will be simplified using the radial distance algorithm.
   */
  simplifyAlgorithm?:
    | string
    | "radial-distance"
    | "zhao-saalfeld"
    | "visvalingam-whyatt"
    | "douglas-peucker";

  smoothAalgorithm?: "string" | "adaptive" | "basic" | "";

  /**
   * Smooths out the angles of the geometry used for shield placement. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries.
   *
   * Expression: true
   * Range: 0-1
   *
   * Default value: 0
   *
   * Default meaning: No smoothing.
   */
  smooth?: string | number;

  /**
   * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
   *
   * Expression: true
   *
   * Default value: src-over
   *
   * Default meaning: Add the current symbolizer on top of other symbolizer.
   */
  compOp?: CompOp;

  /**
   * Controls horizontal spacing between placements of placement type `grid` or `alternating-grid`.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: No placement will be done.
   */
  gridCellWidth?: string | number;

  /**
   * Controls vertical spacing between placements of placement type `grid` or `alternating-grid`.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: No placement will be done.
   */
  gridCellHeight?: string | number;

  /**
   * In case of `line` placement, offsets a shield position a number of pixels parallel to its actual path. In case of `grid` placement, reduces or expands the polygon area. Positive values move the line left or expand the polygon, negative values move it right or shrink the polygon (relative to the directionality of the line or polygon winding).
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Will not be offset.
   */
  offset?: string | number;

  children: JSX.Element;
}) => JSX.Element;

export const LinePatternSymbolizer =
  "LinePatternSymbolizer" as unknown as (props: {
    /**
     * Allows omitting a line pattern symbolizer rule or emitting it with default values.
     *
     * Expression: false
     *
     * Default value: undefined
     *
     * Default meaning: undefined
     */
    default?: "none";

    /**
     * An image file to be repeated and warped along a line. Accepted formats: svg, jpg, png, tiff, and webp.
     *
     * Expression: true
     *
     * Default value: none
     *
     * Default meaning:
     */
    file?: string;

    /**
     * Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases.
     *
     * Expression: true
     *
     * Default value: false
     *
     * Default meaning: The geometry will not be clipped to map bounds before rendering.
     */
    clip?: string | boolean;

    /**
     * Apply an opacity level to the image used for the pattern.
     *
     * Expression: true
     *
     * Default value: 1
     *
     * Default meaning: The image is rendered without modifications.
     */
    opacity?: string | number;

    /**
     * geometries are simplified by the given tolerance.
     *
     * Expression: true
     *
     * Default value: 0
     *
     * Default meaning: geometry will not be simplified.
     */
    simplify?: string | number;

    /**
     * geometries are simplified by the given algorithm.
     *
     * Expression: true
     *
     * Default value: radial-distance
     *
     * Default meaning: The geometry will be simplified using the radial distance algorithm.
     */
    simplifyAlgorithm?:
      | string
      | "radial-distance"
      | "zhao-saalfeld"
      | "visvalingam-whyatt"
      | "douglas-peucker";

    smoothAalgorithm?: "string" | "adaptive" | "basic" | "";

    /**
     * Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries.
     *
     * Expression: true
     * Range: 0-1
     *
     * Default value: 0
     *
     * Default meaning: No smoothing.
     */
    smooth?: string | number;

    /**
     * Offsets a line a number of pixels parallel to its actual path. Positive values move the line left, negative values move it right (relative to the directionality of the line).
     *
     * Expression: true
     *
     * Default value: 0
     *
     * Default meaning: The line will not be offset.
     */
    offset?: string | number;

    /**
     * Transform line geometry with specified function and apply pattern to transformed geometry.
     *
     * Expression: false
     *
     * Default value: none
     *
     * Default meaning: The geometry will not be transformed.
     */
    geometryTransform?: string;

    /**
     * Transform line pattern instance with specified function.
     *
     * Expression: false
     *
     * Default value: none
     *
     * Default meaning: No transformation.
     */
    transform?: string;

    /**
     * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
     *
     * Expression: true
     *
     * Default value: src-over
     *
     * Default meaning: Add the current symbolizer on top of other symbolizer.
     */
    compOp?: string | CompOp;
  }) => JSX.Element;

export const PolygonPatternSymbolizer =
  "PolygonPatternSymbolizer" as unknown as (props: {
    /**
     * Allows omitting a polygon pattern symbolizer rule or emitting it with default values.
     *
     * Expression: false
     *
     * Default value: undefined
     *
     * Default meaning: undefined
     */
    default?: "none";

    /**
     * Image to use as a repeated pattern fill within a polygon. Accepted formats: svg, jpg, png, tiff, and webp.
     *
     * Expression: true
     *
     * Default value: none
     *
     * Default meaning:
     */
    file?: string;

    /**
     * Specify whether to align pattern fills to the layer's geometry (local) or to the map (global).
     *
     * Expression: true
     *
     * Default value: global
     *
     * Default meaning: Patterns will be aligned to the map (or tile boundaries) when being repeated across polygons. This is ideal for seamless patterns in tiled rendering.
     */
    alignment?: string | "global" | "local";

    /**
     * Level of antialiasing of polygon pattern edges.
     *
     * Expression: true
     * Range: 0-1
     *
     * Default value: 1
     *
     * Default meaning: Fully antialiased.
     */
    gamma?: string | number;

    /**
     * Apply an opacity level to the image used for the pattern.
     *
     * Expression: true
     *
     * Default value: 1
     *
     * Default meaning: The image is rendered without modifications.
     */
    opacity?: string | number;

    /**
     * Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases.
     *
     * Expression: true
     *
     * Default value: false
     *
     * Default meaning: The geometry will not be clipped to map bounds before rendering.
     */
    clip?: string | boolean;

    /**
     * geometries are simplified by the given tolerance.
     *
     * Expression: true
     *
     * Default value: 0
     *
     * Default meaning: geometry will not be simplified.
     */
    simplify?: string | number;

    /**
     * geometries are simplified by the given algorithm.
     *
     * Expression: true
     *
     * Default value: radial-distance
     *
     * Default meaning: The geometry will be simplified using the radial distance algorithm.
     */
    simplifyAlgorithm?:
      | string
      | "radial-distance"
      | "zhao-saalfeld"
      | "visvalingam-whyatt"
      | "douglas-peucker";

    smoothAalgorithm?: "string" | "adaptive" | "basic" | "";

    /**
     * Smooths out geometry angles. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries.
     *
     * Expression: true
     * Range: 0-1
     *
     * Default value: 0
     *
     * Default meaning: No smoothing.
     */
    smooth?: string | number;

    /**
     * Transform polygon geometry with specified function and apply pattern to transformed geometry.
     *
     * Expression: false
     *
     * Default value: none
     *
     * Default meaning: The geometry will not be transformed.
     */
    geometryTransform?: string;

    /**
     * Transform polygon pattern instance with specified function.
     *
     * Expression: false
     *
     * Default value: none
     *
     * Default meaning: No transformation.
     */
    transform?: string;

    /**
     * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
     *
     * Expression: true
     *
     * Default value: src-over
     *
     * Default meaning: Add the current symbolizer on top of other symbolizer.
     */
    compOp?: string | CompOp;
  }) => JSX.Element;

export const RasterSymbolizer = "RasterSymbolizer" as unknown as (props: {
  /**
   * Allows omitting a raster symbolizer rule or emitting it with default values.
   *
   * Expression: false
   *
   * Default value: undefined
   *
   * Default meaning: undefined
   */
  default?: "auto" | "none";

  /**
   * The opacity of the raster symbolizer on top of other symbolizers.
   *
   * Expression: false
   *
   * Default value: 1
   *
   * Default meaning: Color is fully opaque.
   */
  opacity?: number;

  /**
   * This is used by the Raster or Gdal datasources to pre-downscale images using overviews. Higher numbers can sometimes cause much better scaled image output, at the cost of speed.
   *
   * Expression: false
   *
   * Default value: -1
   *
   * Default meaning: Allow the datasource to choose appropriate downscaling.
   */
  filterFactor?: number;

  /**
   * The scaling algorithm used to making different resolution versions of this raster layer. Bilinear is a good compromise between speed and accuracy, while lanczos gives the highest quality.
   *
   * Expression: false
   *
   * Default value: near
   *
   * Default meaning: Nearest neighboor resampling will be used to scale the image to the target size of the map.
   */
  scaling?:
    | "near"
    | "fast"
    | "bilinear"
    | "bicubic"
    | "spline16"
    | "spline36"
    | "hanning"
    | "hamming"
    | "hermite"
    | "kaiser"
    | "quadric"
    | "catrom"
    | "gaussian"
    | "bessel"
    | "mitchell"
    | "sinc"
    | "lanczos"
    | "blackman";

  /**
   * A reduced resolution mesh is used for raster reprojection, and the total image size is divided by the mesh-size to determine the quality of that mesh. Values for mesh-size larger than the default will result in faster reprojection but might lead to distortion.
   *
   * Expression: false
   *
   * Default value: 16
   *
   * Default meaning: Reprojection mesh will be 1/16 of the resolution of the source image.
   */
  meshSize?: number;

  /**
   * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
   *
   * Expression: false
   *
   * Default value: src-over
   *
   * Default meaning: Add the current symbolizer on top of other symbolizer.
   */
  compOp?: CompOp;

  /**
   * This can be either `discrete`, `linear` or `exact`. If it is not specified then the default is `linear`.
   *
   * Expression: false
   *
   * Default value: linear
   *
   * Default meaning: A linear interpolation is used to generate colors between the two nearest stops.
   */
  defaultMode?: "discrete" | "linear" | "exact";

  /**
   * This can be any color. Sets the color that is applied to all values outside of the range of the colorizer-stops. If not supplied pixels will be fully transparent.
   *
   * Expression: false
   *
   * Default value: transparent
   *
   * Default meaning: Pixels that are not colored by the colorizer stops will be transparent.
   */
  defaultColor?: string;

  /**
   * This can be any positive floating point value and will be used as a tolerance in floating point comparisions. The higher the value the more likely a stop will match and color data.
   *
   * Expression: false
   *
   * Default value: 1.1920928955078125e-07
   *
   * Default meaning: Pixels must very closely match the stop filter otherwise they will not be colored.
   */
  epsilon?: number;

  /**
   * Assigns raster data values to colors. Stops must be listed in ascending order, and contain at a minimum the value and the associated color. You can also include the color-mode as a third argument, like `stop(100,#fff,exact)`.
   *
   * Expression: false
   * Default value:
   *
   * Default meaning: No colorization will happen without supplying stops.
   */
  stop?: string[];
}) => JSX.Element;

export const PointSymbolizer = "PointSymbolizer" as unknown as (props: {
  /**
   * Allows omitting a point symbolizer rule or emitting it with default values.
   *
   * Expression: false
   *
   * Default value: undefined
   *
   * Default meaning: undefined
   */
  default?: "auto" | "none";

  /**
   * Image file to represent a point. Accepted formats: svg, jpg, png, tiff, and webp.
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning: A 4x4 black square will be rendered.
   */
  file?: string;

  /**
   * Control whether overlapping points are shown or hidden.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Do not allow points to overlap with each other - overlapping markers will not be shown. Shields will not overlap and any shields that might collide with previously placed shields will not be rendered.
   */
  allowOverlap?: boolean;

  /**
   * Control whether the placement of the feature will prevent the placement of other features.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: do not store the bbox of this geometry in the collision detector cache.
   */
  ignorePlacement?: string | boolean;

  /**
   * A value from 0 to 1 to control the opacity of the point.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Fully opaque.
   */
  opacity?: string | number;

  /**
   * Control how this point should be placed. Centroid calculates the geometric center of a polygon, which can be outside of it, while interior always places inside of a polygon.
   *
   * Expression: true
   *
   * Default value: centroid
   *
   * Default meaning: The centroid of the geometry will be used to place the point.
   */
  placement?: string | "centroid" | "interior";

  /**
   * Transform point instance with specified function. Ignores map scale factor.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning: No transformation.
   */
  transform?: string;

  /**
   * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
   *
   * Expression: true
   *
   * Default value: src-over
   *
   * Default meaning: Add the current symbolizer on top of other symbolizer.
   */
  compOp?: string | CompOp;
}) => JSX.Element;

export const TextSymbolizer = "TextSymbolizer" as unknown as (props: {
  fontsetName?: string;

  /**
   * Allows omitting a text symbolizer rule.
   *
   * Expression: false
   *
   * Default value: undefined
   *
   * Default meaning: undefined
   */
  default?: "none";

  /**
   * Value to use for a text label. Data columns are specified using brackets like [column_name].
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning:
   */
  name?: string;

  /**
   * Font name and style to render a label in.
   *
   * Expression: false
   *
   * Default value: none
   *
   * Default meaning:
   */
  faceName?: string;

  /**
   * Text size in pixels.
   *
   * Expression: true
   *
   * Default value: 10
   *
   * Default meaning: Font size of 10 will be used to render text.
   */
  size?: string | number;

  /**
   * Define the amount of text (of the total) present on successive lines when wrapping occurs.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: TODO.
   */
  textRatio?: string | number;

  /**
   * Length of a chunk of text in pixels before wrapping text. If set to zero, text doesn't wrap.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Text will not be wrapped.
   */
  wrapWidth?: string | number;

  /**
   * Wrap text before wrap-width is reached.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Wrapped lines will be a bit longer than wrap-width.
   */
  wrapBefore?: string | boolean;

  /**
   * Must be a single character. If you set it to other than the space character, Mapnik will wrap strictly on that character without involving any additional rules.
   *
   * Expression: true
   *
   * Default value: " "
   *
   * Default meaning: Lines will be wrapped conforming to the (untailored) Unicode Line Break Algorithm provided by ICU BreakIterator.
   */
  wrapCharacter?: string;

  /**
   * Keep the character used to wrap a line instead of removing it, and repeat it on the new line.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Character will be removed when used to wrap a line.
   */
  repeatWrapCharacter?: string | boolean;

  /**
   * Distance the renderer should use to try to place repeated text labels on a line.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Only one label per line will attempt to be placed.
   */
  spacing?: string | number;

  /**
   * Horizontal spacing adjustment between characters in pixels. This value is ignored when `horizontal-alignment` is set to `adjust`. Typographic ligatures are turned off when this value is greater than zero.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: The default character spacing of the font will be used.
   */
  characterSpacing?: string | number;

  /**
   * Vertical spacing adjustment between lines in pixels.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: The default font spacing will be used.
   */
  lineSpacing?: string | number;

  /**
   * Allows the label to be displaced from its ideal position by a number of pixels (only works with placement:line).
   *
   * Expression: true
   *
   * Default value: text-spacing/2.0
   *
   * Default meaning: If a shield cannot be placed then the renderer will advance by text-spacing/2.0 to try placement again.
   */
  labelPositionTolerance?: string | number;

  /**
   * The maximum angle change, in degrees, allowed between adjacent characters in a label. This value internally is converted to radians to the default is 22.5*math.pi/180.0. The higher the value the fewer labels will be placed around around sharp corners.
   *
   * Expression: true
   *
   * Default value: 22.5
   *
   * Default meaning: The label will not be placed if a character falls on a line with an angle sharper than 22.5 degrees.
   */
  maxCharAngleDelta?: string | number;

  /**
   * Specifies the color for the text.
   *
   * Expression: true
   *
   * Default value: black
   *
   * Default meaning: The text will be rendered black.
   */
  fill?: string;

  /**
   * A number from 0 to 1 specifying the opacity for the text.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Fully opaque.
   */
  opacity?: string | number;

  /**
   * A number from 0 to 1 specifying the opacity for the text halo.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Fully opaque.
   */
  haloOpacity?: string | number;

  /**
   * Specifies the color of the halo around the text.
   *
   * Expression: true
   *
   * Default value: white
   *
   * Default meaning: The halo will be rendered white.
   */
  haloFill?: string;

  /**
   * Specify the radius of the halo in pixels.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: no halo.
   */
  haloRadius?: string | number;

  /**
   * Exposes an alternate text halo rendering method that sacrifices quality for speed.
   *
   * Expression: true
   *
   * Default value: full
   *
   * Default meaning: The text will be rendered using the highest quality method rather than the fastest.
   */
  haloRasterizer?: string | "full" | "fast";

  /**
   * Transform text halo relative to the actual text with specified function. Allows for shadow or embossed effects. Ignores map scale factor.
   *
   * Expression: true
   * Default value:
   *
   * Default meaning: No transformation.
   */
  haloTransform?: string;

  /**
   * Displace text by fixed amount, in pixels, +/- along the X axis.  With "dummy" placement-type, a positive value displaces to the right. With "simple" placement-type, it is either left, right or unchanged, depending on the placement selected. Any non-zero value implies "horizontal-alignment" changes to "left" by default. Has no effect with 'line' text-placement-type.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Text will not be displaced.
   */
  dx?: string | number;

  /**
   * Displace text by fixed amount, in pixels, +/- along the Y axis.  With "dummy" placement-type, a positive value displaces downwards. With "simple" placement-type, it is either up, down or unchanged, depending on the placement selected. With "line" placement-type, a positive value displaces above the path.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Text will not be displaced.
   */
  dy?: string | number;

  /**
   * Position of label relative to point position.
   *
   * Expression: true
   *
   * Default value: auto
   *
   * Default meaning: Default affected by value of dy; "top" for dy>0, "bottom" for dy<0.
   */
  verticalAlignment?: string | "top" | "middle" | "bottom" | "auto";

  /**
   * Avoid placing labels that intersect with tile boundaries.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Text will be potentially placed near tile edges and therefore may look cut off unless the same text label is rendered on each adjacent tile.
   */
  avoidEdges?: string | boolean;

  /**
   * Minimum distance that a label can be placed from any other text, shield, or marker.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: No extra margin will be used to determine if a label collides with any other text, shield, or marker.
   */
  margin?: string | number;

  /**
   * Minimum distance between repeated text. If set this will prevent text labels being rendered nearby each other that contain the same text. Similar to text-min-distance with the difference that it works the same no matter what placement strategy is used.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Labels with the same text will be rendered without restriction.
   */
  repeatDistance?: string | number;

  /**
   * Minimum distance to the next label with the same text. Only works for line placement. Deprecated: replaced by `text-repeat-distance` and `text-margin`
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Labels with the same text will be rendered without restriction.
   */
  minimumDistance?: string | number;

  /**
   * Minimum distance a text label will be placed from the edge of a tile. This option is similar to shield-avoid-edges:true except that the extra margin is used to discard cases where the shield+margin are not fully inside the tile.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: No margin will be used to detect if a text label is nearby a tile boundary.
   */
  minimumPadding?: string | number;

  /**
   * Place labels only on polygons and lines with a bounding width longer than this value (in pixels).
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: place labels on all geometries no matter how small they are.
   */
  minimumPathLength?: string | number;

  /**
   * Control whether overlapping text is shown or hidden.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: Do not allow text to overlap with other text - overlapping markers will not be shown.
   */
  allowOverlap?: string | boolean;

  /**
   * Rotate the text. (only works with text-placement:point).
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Text is not rotated and is displayed upright.
   */
  orientation?: string | number;

  /**
   * Rotates the displacement around the placement origin by the angle given by "orientation".
   *
   * Expression: false
   *
   * Default value: false
   *
   * Default meaning: Label center is used for rotation.
   */
  rotateDisplacement?: boolean;

  /**
   * How this label should be placed along lines. By default when more than half of a label's characters are upside down the label is automatically flipped to keep it upright. By changing this parameter you can prevent this "auto-upright" behavior. The "auto-down" value places text in the opposite orientation to "auto". The "left" or "right" settings can be used to force text to always be placed along a line in a given direction and therefore disables flipping if text appears upside down. The "left-only" or "right-only" properties also force a given direction but will discard upside down text rather than trying to flip it.
   *
   * Expression: true
   *
   * Default value: auto
   *
   * Default meaning: Text will be positioned upright automatically.
   */
  upright?:
    | string
    | "auto"
    | "auto-down"
    | "left"
    | "right"
    | "left-only"
    | "right-only";

  /**
   * How this label should be placed. Point placement places one label on top of a point geometry and at the centroid of a polygon or the middle point of a line, line places along lines multiple times per feature, vertex places on the vertexes of polygons, and interior attempts to place inside of a polygon.
   *
   * Expression: true
   *
   * Default value: point
   *
   * Default meaning: One shield will be placed per geometry.
   */
  placement?:
    | string
    | "point"
    | "line"
    | "vertex"
    | "interior"
    | "grid"
    | "alternating-grid";

  /**
   * Re-position and/or re-size text to avoid overlaps. "simple" for basic algorithm (using text-placements string,) "dummy" to turn this feature off.
   *
   * Expression: true
   *
   * Default value: dummy
   *
   * Default meaning: Alternative placements will not be enabled.
   */
  placementType?: string | "dummy" | "simple" | "list";

  /**
   * If "placement-type" is set to "simple", use this "POSITIONS,[SIZES]" string. An example is `text-placements: "E,NE,SE,W,NW,SW";`.
   *
   * Expression: true
   *
   * Default value:
   *
   * Default meaning: No alternative placements will be used.
   */
  placements?: string;

  /**
   * Transform the case of the characters.
   *
   * Expression: true
   *
   * Default value: none
   *
   * Default meaning: Transform text instance with specified function. Ignores map scale factor.
   */
  textTransform?:
    | string
    | "none"
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "reverse";

  /**
   * The text's horizontal alignment from it's centerpoint. If `placement` is set to `line`, then `adjust` can be set to auto-fit the text to the length of the path by dynamically calculating `character-spacing`.
   *
   * Expression: true
   *
   * Default value: auto
   *
   * Default meaning: TODO.
   */
  horizontalAlignment?:
    | string
    | "left"
    | "middle"
    | "right"
    | "auto"
    | "adjust";

  /**
   * Define how text is justified.
   *
   * Expression: true
   *
   * Default value: auto
   *
   * Default meaning: Auto alignment means that text will be centered by default except when using the `placement-type` parameter - in that case either right or left justification will be used automatically depending on where the text could be fit given the `text-placements` directives.
   */
  justifyAlignment?: string | "left" | "right" | "center" | "auto";

  /**
   * Turning on clipping can help performance in the case that the boundaries of the geometry extent outside of tile extents. But clipping can result in undesirable rendering artifacts in rare cases.
   *
   * Expression: true
   *
   * Default value: false
   *
   * Default meaning: The geometry will not be clipped to map bounds before rendering.
   */
  clip?: string | boolean;

  /**
   * Simplify the geometries used for text placement by the given tolerance.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: geometry will not be simplified.
   */
  simplify?: string | number;

  /**
   * Simplify the geometries used for text placement by the given algorithm.
   *
   * Expression: true
   *
   * Default value: radial-distance
   *
   * Default meaning: The geometry will be simplified using the radial distance algorithm.
   */
  simplifyAlgorithm?:
    | string
    | "radial-distance"
    | "zhao-saalfeld"
    | "visvalingam-whyatt"
    | "douglas-peucker";

  smoothAalgorithm?: "string" | "adaptive" | "basic" | "";

  /**
   * Smooths out the angles of the geometry used for text placement. 0 is no smoothing, 1 is fully smoothed. Values greater than 1 will produce wild, looping geometries.
   *
   * Expression: true
   *
   * Range: 0-1
   *
   * Default value: 0
   *
   * Default meaning: No smoothing.
   */
  smooth?: string | number;

  /**
   * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
   *
   * Expression: true
   *
   * Default value: src-over
   *
   * Default meaning: Add the current symbolizer on top of other symbolizer.
   */
  compOp?: string | CompOp;

  /**
   * Composite operation. This defines how this symbolizer should behave relative to symbolizers atop or below it.
   *
   * Expression: true
   *
   * Default value: src-over
   *
   * Default meaning: Add the current symbolizer on top of other symbolizer.
   */
  haloCompOp?: string | CompOp;

  /**
   * Comma separated list of OpenType typographic features. The syntax and semantics conforms to `font-feature-settings` from W3C CSS.
   *
   * Expression: false
   * Default value:
   *
   * Default meaning: Default set of typographic features recommended by OpenType specification. Ligatures are turned off by default when `character-spacing` is greater than zero.
   */
  fontFeatureSettings?: string;

  /**
   * Controls default labeling behavior on multipolygons. The default is true and means that only the polygon with largest bbox is labeled.
   *
   * Expression: true
   *
   * Default value: true
   *
   * Default meaning: For multipolygons only polygon with largest bbox area is labeled (does not apply to other geometries).
   */
  largestBboxOnly?: string | boolean;

  /**
   * Controls horizontal spacing between placements of placement type `grid` or `alternating-grid`.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: No placement will be done.
   */
  gridCellWidth?: string | number;

  /**
   * Controls vertical spacing between placements of placement type `grid` or `alternating-grid`.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: No placement will be done.
   */
  gridCellHeight?: string | number;

  /**
   * In case of `line` placement, offsets a text position a number of pixels parallel to its actual path. In case of `grid` placement, reduces or expands the polygon area. Positive values move the line left or expand the polygon, negative values move it right or shrink the polygon (relative to the directionality of the line or polygon winding).
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Will not be offset.
   */
  offset?: string | number;

  children: JSX.Element;
}) => JSX.Element;

/**
 * Symbolizer that specifies rendering of a pseudo 3D effect for polygons giving them a building-like appearance.
 *
 * Often used instead of a PolygonSymbolizer.
 */
export const BuildingSymbolizer = "BuildingSymbolizer" as unknown as (props: {
  /**
   * Allows omitting a building symbolizer rule or emitting it with default values.
   *
   * Expression: false
   *
   * Default value: undefined
   *
   * Default meaning: undefined
   */
  default?: "auto" | "none";

  /**
   * The color of the buildings fill. Note: 0.8 will be used to multiply each color component to auto-generate a darkened wall color.
   *
   * Expression: true
   *
   * Default value: The color gray will be used for fill.
   *
   * Default meaning: Gray and fully opaque (alpha = 1), same as rgb(128,128,128) or rgba(128,128,128,1).
   */
  fill?: string;

  /**
   * The opacity of the building as a whole, including all walls.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: Color is fully opaque.
   */
  fillOpacity?: string | number;

  /**
   * The height of the building in pixels.
   *
   * Expression: true
   *
   * Default value: 0
   *
   * Default meaning: Buildings will not have a visual height and will instead look like flat polygons.
   */
  height?: string | number;
}) => JSX.Element;

export const DebugSymbolizer = "DebugSymbolizer" as unknown as (props: {
  /**
   * The mode for debug rendering.
   *
   * Expression: true
   *
   * Default value: collision
   *
   * Default meaning: The otherwise invisible collision boxes will be rendered as squares on the map.
   */
  mode?: string | "collision" | "vertex";
}) => JSX.Element;

export const DotSymbolizer = "DotSymbolizer" as unknown as (props: {
  /**
   * Allows omitting a dot symbolizer rule or emitting it with default values.
   *
   * Expression: false
   *
   * Default value: undefined
   *
   * Default meaning: undefined
   */
  default?: "auto" | "none";

  /**
   * The color of the area of the dot.
   *
   * Expression: true
   *
   * Default value: gray
   *
   * Default meaning: The dot fill color is gray.
   */
  fill?: string;

  /**
   * The overall opacity of the dot.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: The opacity of the dot.
   */
  opacity?: string | number;

  /**
   * The width of the dot in pixels.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: The marker width is 1 pixel.
   */
  width?: string | number;

  /**
   * The height of the dot in pixels.
   *
   * Expression: true
   *
   * Default value: 1
   *
   * Default meaning: The marker height is 1 pixels.
   */
  height?: string | number;

  /**
   * Composite operation. This defines how this layer should behave relative to layers atop or below it.
   *
   * Expression: false
   *
   * Default value: src-over
   *
   * Default meaning: Add the current layer on top of other layers.
   */
  compOp?: CompOp;
}) => JSX.Element;

/**
 * Symbolizer that specifies rendering of multiple road shields or other labels, grouped as single point placements on a feature.
 *
 * Multiple labels can be represented on a single feature using indexed column names. These indexed columns are matched to a single set of rules within the group symbolizer. This single set of style rules greatly simplifies the style definition needed to represent many different combinations of shields or labels. For example, if your shield styles use the data columns "type" and "number", you can provide columns "type1", "type2", "number1", and "number2". You can then reference these in the style rules and symbolizers as [type%] and [number%], such that both pairs of values will be matched separately to create two different shields. The individual labels in the group get positioned automatically by a group layout defined within the symbolizer.
 */
export const GroupSymbolizer = "GroupSymbolizer" as unknown as (props: {
  /**
   * Starting index for indexed column names.
   *
   * Default value: 1
   */
  startColumn?: number | string;

  /**
   * Number of labels that will be represented by indexed columns. Indexed columns will range from start-column to start-column + num-columns
   *
   * Default value: 0
   */
  numColumns?: number | string;

  /**
   * Pattern to create unique key from data columns to indicate identical labels.
   * This is used with minimum-distance to avoid excessive repetition of identical labels across features.
   *
   * Note: This value can be overridden in the individual group rules.
   *
   * Default value:
   */
  repeatKey?: string;

  /**
   * "line" to label along lines instead of by point. TODO: Document other options.
   *
   * Default value: point
   */
  placement?: "line" | "point" | "vertex" | "interior" | string;

  /**
   * Avoid placing labels that extend over the edges of the map
   *
   * Default value: false
   */
  avoidEdges?: boolean | string;

  /**
   * Minimum distance between repeated label groups, as defined by repeat-key (works across features)
   *
   * Default value: 0.0
   */
  minimumDistance?: number | string;

  /**
   * Space between repeated labels. If spacing is 0 only one label is placed.
   *
   * Default value: 0
   */
  spacing?: number | string;

  /**
   * Allow labels to be moved from their point in line placement. Lower values indicate that Mapnik tries less positions and generally leads to fewer labels. Higher values lead to Mapnik trying more different positions along a line to find a free spot. If unset or 0, Mapnik sets this value based on the total length of the line to ensure enough labels are placed.
   *
   * Default value: 0
   */
  labelPositionTolerance?: number | string;

  /**
   * Allow labels to overlap other labels - Note: you can also clear the label collision cache at the LAYER level to promote more overlap. See 'clear-label-cache' at XMLConfigReference part layer
   *
   * Default value: false
   */
  allowOverlap?: boolean | string;

  /**
   * Minimum distance that label must be from edges of the map in order to be placed
   *
   * Default value: 0
   */
  minimumPadding?: number | string;

  /**
   * If true then the geometry is clipped to the view before doing placements. Improves performance but can cause bad placements when the results are used for tiling
   *
   * Default value: true
   */
  clip?: boolean | string;

  /**
   * Place labels only on paths longer than this value.
   *
   * Default value: 0
   */
  minimumPathLength?: number | string;

  /**
   * Force an odd amount of labels to be generated.
   *
   * Default value: false
   */
  forceOddLabels?: boolean | string;

  /**
   * Controls default labeling behavior on multipolygons. The default is true and means that only the largest polygon part is labeled.
   *
   * NOTE: this option may change or be renamed in the future
   *
   * Default value: true
   */
   largest_bbox_only?: boolean | string;
}) => JSX.Element;

export const SimpleLayout = "SimpleLayout" as unknown as (props: {
  itemMargin?: number | string;
}) => JSX.Element;

export const PairLayout = "PairLayout" as unknown as (props: {
  itemMargin?: number | string;
}) => JSX.Element;

export const GroupRule = "GroupRule" as unknown as (props: {
  repeatKey?: string;
}) => JSX.Element;

export const FileSource = "FileSource" as unknown as (props: {
  name?: string;
}) => JSX.Element;


export type CompOp =
  | "clear"
  | "src"
  | "dst"
  | "src-over"
  | "dst-over"
  | "src-in"
  | "dst-in"
  | "src-out"
  | "dst-out"
  | "src-atop"
  | "dst-atop"
  | "xor"
  | "plus"
  | "minus"
  | "multiply"
  | "divide"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "linear-dodge"
  | "linear-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "contrast"
  | "invert"
  | "invert-rgb"
  | "grain-merge"
  | "grain-extract"
  | "hue"
  | "saturation"
  | "color"
  | "value";
