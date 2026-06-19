export const gisCourse = {
  id: 'gis',
  title: 'Geographical Information Systems',
  subtitle: 'BIT 2324 — GIS',
  icon: '🌍',
  color: '#0ea5e9',
  bgColor: '#F0F9FF',
  description: 'Geographical Information Systems — covering spatial data, cartography, map projections, GIS software, and real-world applications.',
  chapters: [
    {
      id: 'gis_intro',
      title: 'Introduction to GIS',
      lessons: [
        {
          id: 'gis_intro_overview',
          title: 'Introduction to GIS',
          content: 'What is GIS?\n\nGIS is an information system which is geographic in nature. It is a computer-based tool for mapping and analyzing geographic phenomena that exist on Earth. A GIS provides facilities for data capture, data management, data manipulation and analysis, and presentation of results in both graphic and report form, with a particular emphasis on spatial data.\n\nComponents of GIS\n\nA working GIS integrates five key components: (1) Hardware - the computer system on which GIS operates; (2) Software - provides functions to store, analyze, and display geographic information; (3) Data - the most important component, geographic and tabular data; (4) People - from technical specialists to end users who manage and apply the system; (5) Methods - implementation plans and business rules unique to each organization.\n\nFunctional Subsystems\n\nA GIS has four main functional subsystems: (1) Data Input - converting data from paper maps into digital format (digitizing); (2) Data Storage and Retrieval - organizing data for quick access using a DBMS; (3) Data Manipulation and Analysis - the heart of GIS, defining and executing spatial and attribute procedures; (4) Data Output - generating graphic displays, maps, and tabular reports.\n\nGIS Process\n\nThe GIS process involves six steps: 1. Define the spatial problem/question; 2. Define the GIS criteria; 3. Import or create datasets; 4. Perform GIS analysis; 5. Create the output; 6. Evaluate whether the output solves the problem. If not, refine the problem and repeat the process.\n\nGIS Data Types\n\nGIS uses two basic data types: (1) Spatial data - describes absolute and relative location of geographic features, coordinate-based, includes vector (points, lines, polygons) and raster (continuous surfaces like elevation); (2) Attribute data - describes characteristics of spatial features, quantitative and/or qualitative, also called tabular data (statistics, text, images).\n\nClassification of GIS\n\nGIS software can be classified into six groups: Professional (fully featured, e.g. ArcInfo), Desktop (map making focus, e.g. ArcView, MapInfo), Hand-held (mobile field use), Component (tool kits like MapObjects), Viewer (free display/query tools like ArcExplorer), and Internet GIS (web-based like ArcIMS, MapGuide).\n\nAdvantages of GIS\n\nGIS explores both geographical and thematic components of data in a holistic way. It stresses geographical aspects of research questions, allows handling of large data volumes, integrates data from disparate sources, incorporates location into analysis, and provides a wide variety of visualization forms.\n\nDisadvantages of GIS\n\nGeographical data is expensive to acquire. The learning curve on GIS software can be long. GIS shows spatial relationships but does not provide absolute solutions. GIS originated from earth sciences and computer science, so solutions may not suit all research types.\n\nApproaches to GIS\n\nThree approaches exist: (1) The application approach - GIS as a tool to answer questions and support decisions; (2) The developer approach - building and customizing GIS systems; (3) The science approach - studying principles of geographic information science. These approaches are complementary.'
        }
      ],
      quiz: [
        {
          question: 'What does GIS stand for?',
          options: ['Geographic Information System', 'Global Information System', 'Geographic Integration System', 'General Information Service'],
          correct: 0
        },
        {
          question: 'Which is NOT a component of GIS?',
          options: ['Hardware', 'Software', 'Data', 'Printer'],
          correct: 3
        },
        {
          question: 'What type of data describes the location of features?',
          options: ['Spatial data', 'Attribute data', 'Tabular data', 'Temporal data'],
          correct: 0
        },
        {
          question: 'Which functional subsystem is considered the heart of GIS?',
          options: ['Data Input', 'Data Storage and Retrieval', 'Data Manipulation and Analysis', 'Data Output'],
          correct: 2
        },
        {
          question: 'Which is NOT one of the five GIS components?',
          options: ['Hardware', 'Software', 'Data', 'Network'],
          correct: 3
        },
        {
          question: 'What is the first step in the GIS process?',
          options: ['Define the problem', 'Import data', 'Perform analysis', 'Create output'],
          correct: 0
        },
        {
          question: 'Vector data includes all EXCEPT:',
          options: ['Points', 'Lines', 'Polygons', 'Grid cells'],
          correct: 3
        },
        {
          question: 'What type of GIS is ArcView?',
          options: ['Professional GIS', 'Desktop GIS', 'Hand-held GIS', 'Internet GIS'],
          correct: 1
        },
        {
          question: 'Which of the following is an advantage of GIS?',
          options: ['High cost', 'Long learning curve', 'Integration of disparate data sources', 'Requires absolute solutions'],
          correct: 2
        },
        {
          question: 'What does thin client architecture mean?',
          options: ['Client does most processing', 'Server does most processing', 'Equal processing', 'No processing'],
          correct: 1
        }
      ]
    },
    {
      id: 'gis_software',
      title: 'GIS Software Packages',
      lessons: [
        {
          id: 'gis_software_overview',
          title: 'GIS Software Packages',
          content: 'Desktop GIS\n\nDesktop GIS is a mapping software installed on a personal computer. It stores attribute information in tables linked to map features via themes. Maps use three basic shapes: points (discrete locations), lines (length but no width), and areas/polygons (length and width). Desktop GIS links features to attributes - clicking on a feature reveals all its stored information.\n\nGeobrowser\n\nA Geobrowser is a client (web or stand-alone) that accesses georeferenced data and provides multi-dimensional visualization. Google Earth is the most popular example. Capabilities include robust search, real-time monitoring, historical data access, and built-in import/export tools.\n\nWeb-based GIS\n\nWeb GIS delivers maps and GIS services on the internet using client-server architecture. It is cost-effective, easy to use, and does not require data download. Functionality is more limited than desktop GIS but excellent as data visualization tools. It uses a centralized paradigm approach.\n\nThin Client Server\n\nThin client approach: central control, easy data versioning, generally cheaper, integration possibilities. Disadvantages - large data volume, slow response time, less interactive, no local accountability. Server handles most processing; client is primarily for display.\n\nThick Client Server\n\nThick client approach: document/graphics standards not required, vector data can be used, image quality not restricted to GIF/JPEG, modern interface possible. Disadvantages - additional software requirements, platform/browser incompatibility. More processing occurs on the client side.\n\nGIS Data Types\n\nTwo types of data: Graphic data (maps, images, drawings) and Non-graphic data (attributes describing features). Map scale determines what types of features can be represented. Points become lines become polygons as scale increases - a river can be a line at small scale or area at large scale.\n\nGIS Software Examples\n\nExamples include: ArcView (desktop mapping), ArcGIS (professional analysis), MapInfo Professional (business GIS), Quantum GIS (open source), Autodesk World (CAD-integrated), Intergraph GeoMedia (enterprise). Each has different strengths - the right choice depends on user needs, budget, and technical requirements.\n\nHow GIS Applications Work\n\nGIS applications have a graphical user interface with menus, toolbars, and map display windows. They display map layers stored as files or in databases. Each layer represents real-world features. Most desktop GIS has adopted standards for user interface design and interoperability.\n\nFeature Representation\n\nMaps use three basic shapes: Points (discrete locations too small for areas), Lines (objects with length but too narrow for areas), and Areas (objects too large for points or lines). Map scale determines representation - a river can be a line at small scale or a polygon at large scale.'
        }
      ],
      quiz: [
        {
          question: 'Which geobrowser is the most popular?',
          options: ['Google Earth', 'ArcGIS Explorer', 'MapInfo', 'QGIS'],
          correct: 0
        },
        {
          question: 'What is a key disadvantage of Web GIS?',
          options: ['Cost-effective', 'Easy to use', 'Limited functionality', 'No download required'],
          correct: 2
        },
        {
          question: 'What type of GIS is MapObjects?',
          options: ['Desktop GIS', 'Component GIS', 'Viewer GIS', 'Internet GIS'],
          correct: 1
        },
        {
          question: 'What is a key advantage of thick client?',
          options: ['Central control', 'Modern interface possible', 'Cheaper', 'No software needed'],
          correct: 1
        },
        {
          question: 'What are the three basic map shapes?',
          options: ['Points, Lines, Areas', 'Points, Polygons, Grids', 'Lines, Grids, Surfaces', 'Points, Volumes, Areas'],
          correct: 0
        },
        {
          question: 'What type of GIS is ArcExplorer?',
          options: ['Desktop GIS', 'Component GIS', 'Viewer GIS', 'Internet GIS'],
          correct: 2
        },
        {
          question: 'Which is NOT a GIS software?',
          options: ['ArcGIS', 'QGIS', 'MapInfo', 'Microsoft Word'],
          correct: 3
        },
        {
          question: 'What does thick client NOT require?',
          options: ['Client processing', 'Document/graphics standards', 'Additional software', 'Modern interface'],
          correct: 1
        },
        {
          question: 'What type of client is Google Earth?',
          options: ['Desktop GIS', 'Web GIS', 'Geobrowser', 'Thick client'],
          correct: 2
        },
        {
          question: 'What GIS software is CAD-integrated?',
          options: ['ArcGIS', 'Autodesk World', 'QGIS', 'MapInfo'],
          correct: 1
        }
      ]
    },
    {
      id: 'gis_maps',
      title: 'Maps, Scale & Projections',
      lessons: [
        {
          id: 'gis_maps_overview',
          title: 'Maps, Scale & Projections',
          content: 'Map Scale\n\nMap scale is the ratio of map distance to ground distance. It can be expressed as a representative fraction (RF) like 1:10,000 (unit neutral), a verbal statement, or a scale bar. Large-scale maps (e.g. 1:1,000) show small areas in great detail; small-scale maps (e.g. 1:1,000,000) show large areas with less detail.\n\nCoordinate Systems\n\nThe Geographic Coordinate System (GCS) uses latitude and longitude on a sphere/spheroid. Latitude from equator (0) to poles (90 N/S). Longitude from Prime Meridian (0) to 180 E/W. Coordinates can be DMS or Decimal Degrees. DMS to DD: degrees + minutes/60 + seconds/3600.\n\nDatums\n\nA datum specifies orientation and origin of latitude/longitude lines relative to Earth\'s center or spheroid. Local datums (e.g. NAD83) match closely to local area. Global WGS84 uses Earth\'s center as origin for worldwide consistency, though may be less accurate locally.\n\nMap Projections\n\nMap projections transform the 3D spherical Earth into 2D planar surfaces. Three projection surfaces: plane (azimuthal - good for polar regions), cylinder (cylindrical - e.g. Mercator), cone (conic - good for mid-latitude). Every projection distorts some property.\n\nVector Data Model\n\nVector data stores features as points (0-dimensional), lines/arcs (1-dimensional), and polygons (2-dimensional). Topologic structure stores spatial relationships (connectivity, adjacency). The spaghetti model stores features without explicit topology for simpler display.\n\nRaster Data Model\n\nRaster data uses a grid of cells with values representing features. Cell size determines resolution. Smaller cells = more detail but larger files. Advantages: simple data structure, easy integration with remote sensing. Disadvantages: large file sizes, less precise boundaries.\n\nEntity Dimensions\n\nSpatial features classified by dimension: Points (zero dimensionality, no length/width), Lines (one dimension, length but no width), Polygons (two dimensions, length and width), Surfaces (three dimensions, length, width, height). Surfaces have infinite values and represent continuous data like elevation.\n\nAttribute Data Models\n\nFor raster, cell value is the attribute. For vector, attribute records link to features by unique ID. Common models: Tabular (flat file), Hierarchical (one-to-many), Network (many-to-many), Relational (linked tables), and Object Oriented. Relational is most common in modern GIS.\n\nImage Data in GIS\n\nImage data differs from raster - it represents pictorial data like satellite scenes and scanned photographs. Images are used as background display or graphic attributes. Remote sensing software uses image data for classification. Images must often be converted to raster format for analytical use.'
        }
      ],
      quiz: [
        {
          question: 'Map scale 1:1,000 is considered:',
          options: ['Large scale', 'Small scale', 'Medium scale', 'Micro scale'],
          correct: 0
        },
        {
          question: 'What is the unit of representative fraction?',
          options: ['Meters', 'Kilometers', 'Neutral (no unit)', 'Degree'],
          correct: 2
        },
        {
          question: 'What is the Decimal Degree equivalent of 45°30\'00"?',
          options: ['45.3', '45.5', '45.05', '45.0'],
          correct: 1
        },
        {
          question: 'Which datum uses Earth\'s center as origin?',
          options: ['NAD83', 'WGS84', 'ED50', 'OSGB36'],
          correct: 1
        },
        {
          question: 'Which projection surface is best for polar regions?',
          options: ['Plane (azimuthal)', 'Cylinder (cylindrical)', 'Cone (conic)', 'Ellipsoid'],
          correct: 0
        },
        {
          question: 'What does vector topology store?',
          options: ['Feature shapes', 'Attribute values', 'Spatial relationships', 'Map scale'],
          correct: 2
        },
        {
          question: 'Which raster property determines resolution?',
          options: ['Number of rows', 'Cell size', 'Color depth', 'File format'],
          correct: 1
        },
        {
          question: 'What is the maximum longitude value?',
          options: ['90', '180', '360', '270'],
          correct: 1
        },
        {
          question: 'How do you convert DMS to DD?',
          options: ['Degrees * Minutes * Seconds', 'Degrees + Minutes/60 + Seconds/3600', 'Degrees + Minutes + Seconds', '(Degrees + Minutes)/60'],
          correct: 1
        },
        {
          question: 'What is a datum?',
          options: ['Map projection', 'Orientation of lat/long lines', 'Scale type', 'Grid system'],
          correct: 1
        }
      ]
    },
    {
      id: 'gis_queries',
      title: 'Tabular Data & Queries',
      lessons: [
        {
          id: 'gis_queries_overview',
          title: 'Tabular Data & Queries',
          content: 'Data Modeling\n\nData modeling defines features to be included in the database, their attributes and relationships, and their internal representation. It involves developing conceptual, logical, and physical models. Outcomes include a comprehensive data dictionary. Accuracy standards should be defined as part of database design.\n\nDatabase Models\n\nSeveral database models: Flat (single large table), Hierarchical (one-to-many), Network (many-to-many), Relational (most common, tables linked by keys), and Object Oriented (newer, gaining popularity). Relational is most common in modern GIS.\n\nAttribute Queries\n\nAttribute queries select features using attribute data, typically with SQL. Results can be mapped or presented in tabular form. Can produce subsets of data or choropleth maps showing thematic distributions across areas.\n\nSpatial Queries\n\nSpatial queries use location relationships to find features. Users click features to discover attribute values, or select features based on spatial relationships (within, contains, touches, crosses). Combining attribute and spatial queries creates a powerful exploration tool.\n\nProcedural Manuals\n\nA procedural manual defines steps for developing and processing digital spatial data, ensuring consistency across different technicians. It defines recurring analytical work, such as methods to reconcile past census data with new administrative boundaries.\n\nAccuracy Standards\n\nAccuracy standards should be defined as part of database design. While often not critical in census mapping (hand-drawn maps still used in many countries), accuracy becomes essential when combining census maps with higher-accuracy data from other sources.\n\nOne-Attribute Raster Maps\n\nRaster GIS often uses one-attribute maps: a species map, height map, density map separately. This contrasts with vector\'s multiple-attribute model where one polygon has all attributes. This enables quantitative analysis through map algebra.'
        }
      ],
      quiz: [
        {
          question: 'Which is NOT a database model mentioned?',
          options: ['Flat', 'Hierarchical', 'Relational', 'Spatial'],
          correct: 3
        },
        {
          question: 'What does SQL stand for?',
          options: ['Structured Query Language', 'Simple Query Language', 'Spatial Query Language', 'Standard Query Language'],
          correct: 0
        },
        {
          question: 'What is NOT a data model?',
          options: ['Hierarchical', 'Network', 'Relational', 'Spatial'],
          correct: 3
        },
        {
          question: 'What does network data model support?',
          options: ['One-to-one', 'One-to-many', 'Many-to-one', 'Many-to-many'],
          correct: 3
        },
        {
          question: 'What type of query is \'find all parcels within 100m of river\'?',
          options: ['Attribute query', 'Spatial query', 'SQL query', 'Network query'],
          correct: 1
        },
        {
          question: 'What does a procedural manual ensure?',
          options: ['Data accuracy', 'Consistency across technicians', 'Software updates', 'Map design'],
          correct: 1
        },
        {
          question: 'What does spatial query use?',
          options: ['Attribute values', 'Location relationships', 'Time', 'Scale'],
          correct: 1
        },
        {
          question: 'What is NOT a spatial query?',
          options: ['Find features within polygon', 'Find features touching line', 'SELECT * FROM table', 'Find features near point'],
          correct: 2
        },
        {
          question: 'What links tables in relational model?',
          options: ['Indexes', 'Common keys', 'Foreign objects', 'Pointers'],
          correct: 1
        },
        {
          question: 'What does conceptual data model describe?',
          options: ['Table structures', 'Real-world entities and relationships', 'Physical storage', 'User interface'],
          correct: 1
        }
      ]
    },
    {
      id: 'gis_data_sources',
      title: 'Data Sources & Collection',
      lessons: [
        {
          id: 'gis_data_sources_overview',
          title: 'Data Sources & Collection',
          content: 'Sources of Spatial Data\n\nRaw geographical data comes from: hard copy maps (most popular source), aerial photographs, remotely-sensed imagery (satellite), existing digital data files, and field survey methods. 60-80% of GIS implementation costs lie in data acquisition and database development.\n\nRemote Sensing Data\n\nStereo aerial photographs provide overlapping images for mapping geology, soil, vegetation, and land cover. Digital photogrammetry and orthophoto mapping provide terrain elevation and land cover data. Satellite scanners include passive (sensing reflected/emitted radiation) and active (radar, LiDAR, sonar).\n\nData Collectors and Providers\n\nSystematic data collectors: government agencies with mapping/cadastral mandates. Ad hoc collectors: private surveyors and researchers. Some data is free (elevations, roads, towns). Government data typically inexpensive but may vary in quality.\n\nCreating Digital Datasets\n\nManual data input: (1) Entering spatial data using digitizers, scanners, stereoplotters; (2) Entering attribute data from paper records; (3) Verifying and editing - checking for errors like dangling chains, unlabelled polygons; (4) Linking spatial to attribute data using common identifiers.\n\nDigitizing Errors\n\nCommon errors: dangling chains (undershoots/overshoots), unlabelled polygons (duplicate digitizing of single chain), conflicting labels (multiple seed points for one polygon), line segments with same left/right labels, data scaling problems. Corrected through editing tools.\n\nData Compatibility\n\nWhen acquiring data ensure: currency, recording method, scale, georeferencing system, collection technique, sampling strategy, data quality, classification methods, and mapping unit size. All spatial data must be in a common coordinate frame through georeferencing.\n\nData Transfer Methods\n\nData may need encoding from source to target format. Interoperability standards enable reading other formats. Remote sensing data may need pre-processing: resolution adjustment, cartographic projection, classification, and raster-vector conversion.\n\nField Survey Methods\n\nTraditional surveys record sample values at known locations using various instruments. GPS receivers now enable precise location recording during field data collection, enabling accurate integration with other spatial datasets.'
        }
      ],
      quiz: [
        {
          question: 'What percentage of GIS costs go to data?',
          options: ['20-30%', '40-50%', '60-80%', '80-90%'],
          correct: 2
        },
        {
          question: 'Which is an active remote sensing system?',
          options: ['Aerial photograph', 'Satellite image', 'LiDAR', 'Thermal scanner'],
          correct: 2
        },
        {
          question: 'What are dangling chains?',
          options: ['Undershoots/overshoots', 'Unlabelled polygons', 'Duplicate chains', 'Missing attributes'],
          correct: 0
        },
        {
          question: 'What covers 60-80% of GIS costs?',
          options: ['Hardware', 'Software', 'Data acquisition', 'Training'],
          correct: 2
        },
        {
          question: 'What is the main challenge with manual digitizing?',
          options: ['Speed', 'Errors and quality control', 'Cost', 'Training'],
          correct: 1
        },
        {
          question: 'What type of satellite scanner is LiDAR?',
          options: ['Passive system', 'Active system', 'Hybrid system', 'Optical system'],
          correct: 1
        },
        {
          question: 'Which is NOT a data collection method?',
          options: ['Maps', 'Aerial photos', 'Field survey', 'Speculation'],
          correct: 3
        },
        {
          question: 'Which NOT a digitizing error?',
          options: ['Dangling chains', 'Unlabelled polygons', 'Conflicting labels', 'Missing projection'],
          correct: 3
        },
        {
          question: 'What is NOT a systematic data collector?',
          options: ['Government mapping agency', 'Cadastral survey', 'Private surveyors', 'National census bureau'],
          correct: 2
        },
        {
          question: 'What does data verification check?',
          options: ['Map design', 'Errors in digitized data', 'Color balance', 'Scale'],
          correct: 1
        }
      ]
    },
    {
      id: 'gis_data_files',
      title: 'Spatial Data Files',
      lessons: [
        {
          id: 'gis_data_files_overview',
          title: 'Spatial Data Files',
          content: 'Characteristics of Spatial Data Files\n\nSpatial data files store georeferenced information defining location. Each file is a digital representation of similar geographic features. Features can be real physical entities (lakes, rivers, roads) or conceptual (census boundaries, zoning). Each file has shapes, a tabular database, and a coordinate system.\n\nShapefile Format\n\nThe shapefile is the most common vector format, consisting of at least three files: .shp (geometry), .dbf (attributes), .shx (index). Features are points, lines, or polygons. Limitations: no topology, 10-character field names, 2GB limit, multiple files required.\n\nCoverage Format\n\nCoverages were the original ESRI spatial data format using topologic data structure. A single coverage comprises two folders with many files. While superseded by shapefiles and geodatabases, coverages are still widely available on data download websites.\n\nGrid and Image Data\n\nGrids are raster formats using rows and columns of pixels. Integer grids have pixel values with textual descriptions; floating point grids use decimals. Image formats (.jpg, .tif, .bil) can be georeferenced and orthorectified, becoming orthophotographs.\n\nGeoDatabase Format\n\nThe GeoDatabase (GDB) is the newest ESRI format. All spatial data resides in a single file, eliminating files across folders. GDBs have greater intelligence and support topology, domains, subtypes, and relationship classes.\n\nNaming Conventions\n\nRules: Keep names short (8-15 chars), do not use spaces or special characters, use underscores or camelCase, avoid starting with numbers, be descriptive but concise. Consistent naming ensures data remains understandable to all users.\n\nShapefile Limitations\n\nShapefiles have no topology, 10-character field names, 2GB size limit, require multiple files, no raster support, and poor performance with large datasets. The GeoDatabase addresses these with topology, larger capacity, and single-file storage.\n\nRaster Resolution\n\nCell size selection is critical: too coarse over-generalizes, too fine creates large volumes. Original data accuracy should determine cell size. Vector-raster conversion requires knowing original scale before setting conversion cell size.\n\nOrthophotographs\n\nImages become spatial data when georeferenced with ground coordinates. Orthorectification removes distortions from terrain, camera tilt, and edge effects. Orthorectified and georeferenced images are called orthophotographs.'
        }
      ],
      quiz: [
        {
          question: 'Which file stores geometry in a shapefile?',
          options: ['.shp', '.dbf', '.shx', '.prj'],
          correct: 0
        },
        {
          question: 'What is a key limitation of shapefiles?',
          options: ['Raster support', 'No topology', 'Single file', 'Unlimited size'],
          correct: 1
        },
        {
          question: 'What is an orthophotograph?',
          options: ['Raw satellite image', 'Georeferenced and orthorectified image', 'Scanned map', 'Digital elevation model'],
          correct: 1
        },
        {
          question: 'Which format stores all spatial data in one file?',
          options: ['Shapefile', 'Coverage', 'GeoDatabase', 'Grid'],
          correct: 2
        },
        {
          question: 'What does .dbf file store in shapefile?',
          options: ['Geometry', 'Attributes', 'Index', 'Projection'],
          correct: 1
        },
        {
          question: 'What is the newest ESRI format?',
          options: ['Shapefile', 'Coverage', 'GeoDatabase', 'Grid'],
          correct: 2
        },
        {
          question: 'How many files does a shapefile minimally need?',
          options: ['One', 'Two', 'Three', 'Four'],
          correct: 2
        },
        {
          question: 'Which shapefile file is the index?',
          options: ['.shp', '.dbf', '.shx', '.prj'],
          correct: 2
        },
        {
          question: 'What is the shapefile size limit?',
          options: ['1GB', '2GB', '4GB', 'No limit'],
          correct: 1
        },
        {
          question: 'What is a limitation of shapefile field names?',
          options: ['10 characters max', '5 characters max', '20 characters max', 'No limit'],
          correct: 0
        }
      ]
    },
    {
      id: 'gis_cartography',
      title: 'Cartographic Design',
      lessons: [
        {
          id: 'gis_cartography_overview',
          title: 'Cartographic Design',
          content: 'Use of Color\n\nPrimary function: make map information visually distinguishable. Three dimensions: Hue (dominant wavelength - for qualitative differences), Value (lightness/darkness - for quantitative), Saturation (purity of hue). Color choice is critical for readability.\n\nUse of Text and Symbols\n\nDescriptive text gives titles, legends, and labels. Text characteristics: family, style, font, color. Symbols: Marker (.mrk) for points, Line (.lin) for arcs, Shade (.shd) for polygons, Text annotation (.txt). GIS software supplies predefined symbol sets.\n\nMap Composition\n\nKey elements: Visual balance (location/proportionality), Clarity (generalization), Hierarchy (font/symbol size), Contrast (color/shading), Context (data layer selection), Text (annotation). Map design blends science and art - subjectivity and creativity matter.\n\nCartographic Generalization\n\nGeneralization reduces data complexity at smaller scales. Operations: simplification, smoothing, aggregation, amalgamation, merging, collapse, refinement, typification, exaggeration, displacement, classification. Problems: congestion, coalescence, conflict, complication, imperceptibility.\n\nMap-to-Page Transformation\n\nFour concepts: Physical page (display surface), Graphics page (where map is drawn), Map limits (where features are drawn), Map extent (Earth area displayed). Cartography blends science and art - creativity plays an important role.\n\nGeographic Contents\n\nElements governed by: Map theme, Map coverage, Map scale. Visual considerations: balance, clarity, hierarchy, contrast, context, and text. These ensure maps communicate information effectively to the reader.\n\nLabel Placement\n\nGood label placement ensures readability and associates labels with map elements. Labels must not overlap features or other labels. GIS provides automated placement but manual adjustment is needed for quality. Text characteristics include family, style, size, and color.'
        }
      ],
      quiz: [
        {
          question: 'What are the three dimensions of color?',
          options: ['Red, Green, Blue', 'Hue, Value, Saturation', 'CMYK', 'RGB, HSL'],
          correct: 1
        },
        {
          question: 'Which symbol file extension is for points?',
          options: ['.mrk', '.lin', '.shd', '.txt'],
          correct: 0
        },
        {
          question: 'What reduces data complexity at smaller scales?',
          options: ['Classification', 'Generalization', 'Digitizing', 'Projection'],
          correct: 1
        },
        {
          question: 'Which is a qualitative color use?',
          options: ['Elevation', 'Land cover types', 'Population density', 'Temperature'],
          correct: 1
        },
        {
          question: 'What does value measure in color?',
          options: ['Wavelength', 'Lightness/darkness', 'Purity', 'Saturation'],
          correct: 1
        },
        {
          question: 'What is visual hierarchy in maps?',
          options: ['Color balance', 'Font and symbol size', 'Layer order', 'Scale'],
          correct: 1
        },
        {
          question: 'Which color dimension indicates purity?',
          options: ['Hue', 'Value', 'Saturation', 'Brightness'],
          correct: 2
        },
        {
          question: 'What is NOT a cartographic element?',
          options: ['Balance', 'Clarity', 'Hierarchy', 'Animation'],
          correct: 3
        },
        {
          question: 'What generalization operation merges features?',
          options: ['Simplification', 'Amalgamation', 'Collapse', 'Exaggeration'],
          correct: 1
        },
        {
          question: 'When generalization becomes impossible:',
          options: ['Conflict', 'Complication', 'Imperceptibility', 'Congestion'],
          correct: 2
        }
      ]
    },
    {
      id: 'gis_applications',
      title: 'GIS Applications',
      lessons: [
        {
          id: 'gis_applications_overview',
          title: 'GIS Applications',
          content: 'Wildlife Habitat Assessment\n\nGIS can calculate home ranges and territories. Slope data eliminates steep areas; elevation eliminates unsuitable areas. Juxtaposition measures different vegetation types; interspersion measures edge values - both critical as food/cover must be nearby. Proximity includes distances to water and roads.\n\nHydrological Modeling\n\nPredicting snowmelt runoff uses regression with spatial data: snow-covered area, snow-water equivalent, elevation, slope, aspect, vegetation, thermal emittance, near-infrared reflectance. Best model has highest correlation coefficient.\n\nSite Selection Applications\n\nGIS supports: helicopter landing zones, amphibious planning (water depth), buffer zones, flight planning, battlefield visualization, cross-country movement, route planning, intervisibility studies, facilities management, airfield assessment, road network analysis, observation post siting.\n\nGIS as a Decision Tool\n\nGIS is a powerful decision-making tool, but just a tool. There is great temptation to rely too heavily on the computer and stop thinking. There is also a tendency to collect too much spatial data - one more layer is not always the answer.\n\nMilitary and Defense GIS\n\nMilitary GIS: helicopter landing zone selection, amphibious assault planning, buffer zones, flight planning, battlefield visualization, cross-country movement analysis, route planning, intervisibility studies, observation post siting. These use terrain analysis and viewshed.\n\nInfrastructure Management\n\nGIS supports facilities management, airfield assessment, road network analysis, communication propagation modeling, and perspective view generation. These help maintain and analyze physical assets across geographic areas.\n\nWildlife Habitat Models\n\nHabitat models combine spatial data to predict quality. Variables include vegetation juxtaposition, interspersion, distances to water/roads, slope, and elevation. Weighted analysis determines good, marginal, and poor habitat areas.'
        }
      ],
      quiz: [
        {
          question: 'What does juxtaposition measure in habitat assessment?',
          options: ['Edge values', 'Different vegetation types', 'Elevation range', 'Water proximity'],
          correct: 1
        },
        {
          question: 'Which is NOT a GIS application mentioned?',
          options: ['Wildlife habitat', 'Hydrological modeling', 'Site selection', 'Weather forecasting'],
          correct: 3
        },
        {
          question: 'What does interspersion measure?',
          options: ['Different vegetation types', 'Edge values', 'Elevation', 'Distance'],
          correct: 1
        },
        {
          question: 'What habitat measure calculates edge values?',
          options: ['Juxtaposition', 'Interspersion', 'Proximity', 'Elevation'],
          correct: 1
        },
        {
          question: 'What analysis finds shortest path?',
          options: ['Buffer analysis', 'Network analysis', 'Overlay analysis', 'Terrain analysis'],
          correct: 1
        },
        {
          question: 'What is NOT a spatial analysis technique?',
          options: ['Buffer analysis', 'Overlay analysis', 'Network analysis', 'Word processing'],
          correct: 3
        },
        {
          question: 'What is the role of GIS in hydrology?',
          options: ['Make maps', 'Predict snowmelt runoff', 'Store data', 'Print reports'],
          correct: 1
        },
        {
          question: 'What terrain analysis calculates slope?',
          options: ['Network model', 'Digital elevation model', 'Buffer', 'Overlay'],
          correct: 1
        },
        {
          question: 'What does Kriging do?',
          options: ['Classifies data', 'Interpolates spatial data', 'Creates buffers', 'Overlays layers'],
          correct: 1
        },
        {
          question: 'What does overlay analysis NOT include?',
          options: ['Intersect', 'Union', 'Clip', 'Buffer'],
          correct: 3
        }
      ]
    },
    {
      id: 'gis_implementation',
      title: 'Implementation & Future of GIS',
      lessons: [
        {
          id: 'gis_implementation_overview',
          title: 'Implementation & Future of GIS',
          content: 'GIS Software Options\n\nNo single best GIS. About 10 major commercial offerings exist. Evaluate strictly in terms of user needs, work procedures, production requirements, and organizational context. An experienced GIS consultant plays a valuable role. Benchmarking with real data is the accepted approach.\n\nJustification and Expectations\n\nGIS is a long-term investment with steep learning curve. Plans must address: acquisition costs, data requirements, database design, data loading, timetable, system life cycle, operating procedures, staffing, training, application development. Benefits include better storage, efficient retrieval, better decisions.\n\nCommon Implementation Pitfalls\n\nKey pitfalls: failure to identify all users, failure to match GIS capability to needs, failure to identify total costs (ongoing far exceed acquisition), failure to conduct pilot study, giving implementation to EDP instead of GIS analysts, failure to consider training.\n\nImplementation Process\n\nSix-phase process: 1. Creating awareness through workshops; 2. Identifying requirements via user needs analysis; 3. System evaluations with benchmarks; 4. Justifying acquisition through cost-benefit analysis; 5. System acquisition and start-up; 6. Operational phase with ongoing maintenance.\n\nUser Needs Analysis\n\nIdentifies system users and required information products. Needs translate into functional requirements. Experienced GIS consultants play a major role in this phase. Prioritization of products and data requirements is essential for successful implementation.\n\nSystem Evaluation\n\nStages: (1) Identify candidates via demonstrations and vendor literature; (2) Short-list with low-level assessment; (3) High-level assessment with rating matrices; (4) Benchmark with real data. User-friendly systems have clear commands, error messages, and help facilities.\n\nCost-Benefit Analysis\n\nConsider: database development, maintenance/training needs, organizational requirements. Benefits include: better data storage, efficient retrieval, rapid analysis of alternatives, and better decisions. Intangible benefits must also be evaluated.'
        }
      ],
      quiz: [
        {
          question: 'What is a key pitfall in GIS implementation?',
          options: ['Too much training', 'Failure to identify total costs', 'Over-planning', 'Excessive pilot studies'],
          correct: 1
        },
        {
          question: 'How many phases in the implementation process?',
          options: ['Four', 'Five', 'Six', 'Seven'],
          correct: 2
        },
        {
          question: 'What does OGC develop?',
          options: ['GIS software', 'Interoperability standards', 'Map projections', 'Data formats'],
          correct: 1
        },
        {
          question: 'What does WMS serve?',
          options: ['Georeferenced map images', 'Vector features', 'Raster data', 'Point clouds'],
          correct: 0
        },
        {
          question: 'Which trend involves live data from sensors?',
          options: ['Cloud GIS', 'Real-time GIS', 'Big Data GIS', 'Mobile GIS'],
          correct: 1
        },
        {
          question: 'How many commercial GIS offerings exist?',
          options: ['About 5', 'About 10', 'About 20', 'About 50'],
          correct: 1
        },
        {
          question: 'What implements a pilot study?',
          options: ['Evaluation', 'Benchmarking', 'Pilot study', 'Testing with real data'],
          correct: 3
        },
        {
          question: 'What does WFS serve?',
          options: ['Map images', 'Vector features', 'Raster data', 'Document'],
          correct: 1
        },
        {
          question: 'What is ISO 19115?',
          options: ['Metadata standard', 'Projection standard', 'Data format', 'Network protocol'],
          correct: 0
        },
        {
          question: 'What is the purpose of a pilot study?',
          options: ['Evaluate existing system', 'Test before full acquisition', 'Train users', 'Collect data'],
          correct: 1
        }
      ]
    },
    {
      id: 'gis_review',
      title: 'GIS Summary & Review',
      lessons: [
        {
          id: 'gis_review_overview',
          title: 'GIS Summary & Review',
          content: 'GIS Core Concepts Review\n\nA GIS integrates hardware, software, data, people, methods to capture, store, manipulate, analyze, and display georeferenced information. Spatial data comes in vector (points, lines, polygons) and raster (grid cells) formats. Attribute data describes characteristics.\n\nData Lifecycle\n\nThe GIS data lifecycle: acquisition (maps, remote sensing, surveys), input (digitizing, scanning), storage (shapefiles, geodatabases), manipulation (projections, conversions), analysis (queries, overlays, buffers, interpolation), output (maps, reports, visualizations).\n\nSpatial Analysis Techniques\n\nKey techniques: Buffer analysis (proximity zones), Overlay analysis (intersect, union, clip), Network analysis (shortest path), Terrain analysis (slope, aspect, hillshade), Interpolation (IDW, kriging), Map algebra (raster calculations), Multi-criteria analysis (weighted overlay).\n\nGIS Standards and Interoperability\n\nOGC develops interoperability standards. WMS serves map images; WFS serves vector features. Metadata standards (ISO 19115) document data quality and lineage. Data dictionaries define field names and types. Interoperability enables different systems to exchange data.\n\nEmerging Trends\n\nCurrent trends: Cloud GIS (hosted online), Real-time GIS (live sensor/GPS data), Big Data GIS (massive spatial datasets from IoT), Digital Twins (3D digital replicas), Mobile GIS, Location-based Services. Ethical concerns include locational privacy and data sovereignty.\n\nGIS Ethics and Privacy\n\nLocational privacy concerns grow as GPS integrates into mobile devices. Questions about rights to location data are emerging. Data sovereignty concerns ownership of geographic data, particularly from government agencies.\n\nOGC Standards\n\nWMS serves map images, WFS serves vector features, WCS serves raster data. ISO 19115 is the international metadata standard. FGDC is the US metadata standard. These ensure data sharing across different systems and organizations.\n\nImplementation Success Factors\n\nSuccess requires: adequate staff training, realistic priorities, well-defined milestones, proper time and training resources. The learning curve threshold is about two years. GIS acquisition based on defined user needs is more likely to succeed.'
        }
      ],
      quiz: [
        {
          question: 'What is the most important component of GIS?',
          options: ['Hardware', 'Software', 'Data', 'People'],
          correct: 2
        },
        {
          question: 'What type of data describes feature characteristics?',
          options: ['Spatial data', 'Attribute data', 'Raster data', 'Vector data'],
          correct: 1
        },
        {
          question: 'Which dimension are points?',
          options: ['Zero', 'One', 'Two', 'Three'],
          correct: 0
        },
        {
          question: 'Which dimension are lines?',
          options: ['Zero', 'One', 'Two', 'Three'],
          correct: 1
        },
        {
          question: 'What is NOT a scale expression?',
          options: ['RF', 'Verbal', 'Scale bar', 'Decimal'],
          correct: 3
        },
        {
          question: 'What is NOT a benefit of GIS?',
          options: ['Better data storage', 'Efficient retrieval', 'Increased paper use', 'Better decisions'],
          correct: 2
        },
        {
          question: 'What does interoperability enable?',
          options: ['Faster processing', 'Data exchange between systems', 'Better maps', 'Lower costs'],
          correct: 1
        },
        {
          question: 'Which NOT a data lifecycle stage?',
          options: ['Acquisition', 'Storage', 'Analysis', 'Selling'],
          correct: 3
        },
        {
          question: 'What does WCS stand for?',
          options: ['Web Map Service', 'Web Coverage Service', 'Web Feature Service', 'Web Coordinate Service'],
          correct: 1
        },
        {
          question: 'What is NOT an emerging GIS trend?',
          options: ['Cloud GIS', 'Real-time GIS', 'Big Data GIS', 'Manual digitizing'],
          correct: 3
        }
      ]
    }
  ]
};
