var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Counties_Shoreline_1 = new ol.format.GeoJSON();
var features_Counties_Shoreline_1 = format_Counties_Shoreline_1.readFeatures(json_Counties_Shoreline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Counties_Shoreline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Counties_Shoreline_1.addFeatures(features_Counties_Shoreline_1);
var lyr_Counties_Shoreline_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Counties_Shoreline_1, 
                style: style_Counties_Shoreline_1,
                popuplayertitle: "Counties_Shoreline",
                interactive: false,
                title: '<img src="styles/legend/Counties_Shoreline_1.png" /> Counties_Shoreline'
            });
var format_New_York_State_Public_School_District_Boundaries_2 = new ol.format.GeoJSON();
var features_New_York_State_Public_School_District_Boundaries_2 = format_New_York_State_Public_School_District_Boundaries_2.readFeatures(json_New_York_State_Public_School_District_Boundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_New_York_State_Public_School_District_Boundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_York_State_Public_School_District_Boundaries_2.addFeatures(features_New_York_State_Public_School_District_Boundaries_2);
var lyr_New_York_State_Public_School_District_Boundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_New_York_State_Public_School_District_Boundaries_2, 
                style: style_New_York_State_Public_School_District_Boundaries_2,
                popuplayertitle: "New_York_State_Public_School_District_Boundaries",
                interactive: false,
                title: '<img src="styles/legend/New_York_State_Public_School_District_Boundaries_2.png" /> New_York_State_Public_School_District_Boundaries'
            });
var format_ChautauquaCountySchoolsdemographics_3 = new ol.format.GeoJSON();
var features_ChautauquaCountySchoolsdemographics_3 = format_ChautauquaCountySchoolsdemographics_3.readFeatures(json_ChautauquaCountySchoolsdemographics_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChautauquaCountySchoolsdemographics_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChautauquaCountySchoolsdemographics_3.addFeatures(features_ChautauquaCountySchoolsdemographics_3);cluster_ChautauquaCountySchoolsdemographics_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ChautauquaCountySchoolsdemographics_3
});
var lyr_ChautauquaCountySchoolsdemographics_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ChautauquaCountySchoolsdemographics_3, 
                style: style_ChautauquaCountySchoolsdemographics_3,
                popuplayertitle: "Chautauqua County Schools - demographics",
                interactive: true,
                title: '<img src="styles/legend/ChautauquaCountySchoolsdemographics_3.png" /> Chautauqua County Schools - demographics'
            });
var format_ChautauquaCountySchools_4 = new ol.format.GeoJSON();
var features_ChautauquaCountySchools_4 = format_ChautauquaCountySchools_4.readFeatures(json_ChautauquaCountySchools_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChautauquaCountySchools_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChautauquaCountySchools_4.addFeatures(features_ChautauquaCountySchools_4);cluster_ChautauquaCountySchools_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ChautauquaCountySchools_4
});
var lyr_ChautauquaCountySchools_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ChautauquaCountySchools_4, 
                style: style_ChautauquaCountySchools_4,
                popuplayertitle: "Chautauqua County Schools",
                interactive: true,
                title: '<img src="styles/legend/ChautauquaCountySchools_4.png" /> Chautauqua County Schools'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Counties_Shoreline_1.setVisible(true);lyr_New_York_State_Public_School_District_Boundaries_2.setVisible(true);lyr_ChautauquaCountySchoolsdemographics_3.setVisible(true);lyr_ChautauquaCountySchools_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Counties_Shoreline_1,lyr_New_York_State_Public_School_District_Boundaries_2,lyr_ChautauquaCountySchoolsdemographics_3,lyr_ChautauquaCountySchools_4];
lyr_Counties_Shoreline_1.set('fieldAliases', {'NAME': 'NAME', 'ABBREV': 'ABBREV', 'GNIS_ID': 'GNIS_ID', 'FIPS_CODE': 'FIPS_CODE', 'SWIS': 'SWIS', 'NYSP_ZONE': 'NYSP_ZONE', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'DOS_LL': 'DOS_LL', 'DOSLL_DATE': 'DOSLL_DATE', 'NYC': 'NYC', 'CALC_SQ_MI': 'CALC_SQ_MI', 'DATEMOD': 'DATEMOD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_New_York_State_Public_School_District_Boundaries_2.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'FID_School': 'FID_School', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SCHOOL_': 'SCHOOL_', 'SCHOOL_ID': 'SCHOOL_ID', 'SCHDIST04_': 'SCHDIST04_', 'SCHDIST041': 'SCHDIST041', 'SCH_LATEST': 'SCH_LATEST', 'SCH_LATE_1': 'SCH_LATE_1', 'SCHOOLDIST': 'SCHOOLDIST', 'POLYTYPE': 'POLYTYPE', 'PRIMARYPOL': 'PRIMARYPOL', 'USERNAME': 'USERNAME', 'UPDATE_': 'UPDATE_', 'EDITED': 'EDITED', 'RPOLY_': 'RPOLY_', 'LPOLY_': 'LPOLY_', 'EACODE': 'EACODE', 'District2': 'District2', 'Inst_ID': 'Inst_ID', 'SchDist': 'SchDist', 'FID_BOCES_': 'FID_BOCES_', 'SEDdir_BOC': 'SEDdir_BOC', 'SEDdir_B_1': 'SEDdir_B_1', 'Shape_Leng': 'Shape_Leng', 'OID_': 'OID_', 'ID': 'ID', 'INSTITID': 'INSTITID', 'SED_CODE_1': 'SED_CODE_1', 'POPULAR_NA': 'POPULAR_NA', 'INSTPECD': 'INSTPECD', 'INSTSUBYPE': 'INSTSUBYPE', 'INSSUBDE': 'INSSUBDE', 'MUNICODE': 'MUNICODE', 'SDLCODE': 'SDLCODE', 'ORPTSCOD_1': 'ORPTSCOD_1', 'Shape_Le_1': 'Shape_Le_1', 'instidNUM': 'instidNUM', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_ChautauquaCountySchoolsdemographics_3.set('fieldAliases', {'School Name': 'School Name', 'LAT': 'LAT', 'LON': 'LON', 'YEAR': 'YEAR', 'Title 1 Eligible': 'Title 1 Eligible', 'K12 total enrollment': 'K12 total enrollment', '% Black': '% Black', '% Hispanic': '% Hispanic', '% White': '% White', '% Multiracial': '% Multiracial', '% with disabilities': '% with disabilities', '% econ disadvantaged': '% econ disadvantaged', '% homeless': '% homeless', '% in foster care': '% in foster care', });
lyr_ChautauquaCountySchools_4.set('fieldAliases', {'School Name': 'School Name', 'Address': 'Address', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'LAT': 'LAT', 'LON': 'LON', 'Contact Name': 'Contact Name', 'Title': 'Title', 'Phone': 'Phone', 'Contact email': 'Contact email', });
lyr_Counties_Shoreline_1.set('fieldImages', {'NAME': 'TextEdit', 'ABBREV': 'TextEdit', 'GNIS_ID': 'TextEdit', 'FIPS_CODE': 'TextEdit', 'SWIS': 'TextEdit', 'NYSP_ZONE': 'TextEdit', 'POP1990': 'TextEdit', 'POP2000': 'TextEdit', 'POP2010': 'TextEdit', 'POP2020': 'TextEdit', 'DOS_LL': 'TextEdit', 'DOSLL_DATE': 'DateTime', 'NYC': 'TextEdit', 'CALC_SQ_MI': 'TextEdit', 'DATEMOD': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_New_York_State_Public_School_District_Boundaries_2.set('fieldImages', {'FID': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'OBJECTID': 'Range', 'FID_School': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SCHOOL_': 'Range', 'SCHOOL_ID': 'Range', 'SCHDIST04_': 'TextEdit', 'SCHDIST041': 'TextEdit', 'SCH_LATEST': 'Range', 'SCH_LATE_1': 'Range', 'SCHOOLDIST': 'TextEdit', 'POLYTYPE': 'TextEdit', 'PRIMARYPOL': 'TextEdit', 'USERNAME': 'TextEdit', 'UPDATE_': 'DateTime', 'EDITED': 'TextEdit', 'RPOLY_': 'Range', 'LPOLY_': 'Range', 'EACODE': 'TextEdit', 'District2': 'TextEdit', 'Inst_ID': 'TextEdit', 'SchDist': 'TextEdit', 'FID_BOCES_': 'Range', 'SEDdir_BOC': 'TextEdit', 'SEDdir_B_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OID_': 'Range', 'ID': 'Range', 'INSTITID': 'TextEdit', 'SED_CODE_1': 'TextEdit', 'POPULAR_NA': 'TextEdit', 'INSTPECD': 'Range', 'INSTSUBYPE': 'Range', 'INSSUBDE': 'TextEdit', 'MUNICODE': 'TextEdit', 'SDLCODE': 'TextEdit', 'ORPTSCOD_1': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'instidNUM': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_ChautauquaCountySchoolsdemographics_3.set('fieldImages', {'School Name': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'YEAR': 'Range', 'Title 1 Eligible': 'TextEdit', 'K12 total enrollment': 'Range', '% Black': 'Range', '% Hispanic': 'Range', '% White': 'Range', '% Multiracial': 'Range', '% with disabilities': 'Range', '% econ disadvantaged': 'Range', '% homeless': 'Range', '% in foster care': 'Range', });
lyr_ChautauquaCountySchools_4.set('fieldImages', {'School Name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'Contact Name': 'TextEdit', 'Title': 'TextEdit', 'Phone': 'TextEdit', 'Contact email': 'TextEdit', });
lyr_Counties_Shoreline_1.set('fieldLabels', {'NAME': 'no label', 'ABBREV': 'no label', 'GNIS_ID': 'no label', 'FIPS_CODE': 'no label', 'SWIS': 'no label', 'NYSP_ZONE': 'no label', 'POP1990': 'no label', 'POP2000': 'no label', 'POP2010': 'no label', 'POP2020': 'no label', 'DOS_LL': 'no label', 'DOSLL_DATE': 'no label', 'NYC': 'no label', 'CALC_SQ_MI': 'no label', 'DATEMOD': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_New_York_State_Public_School_District_Boundaries_2.set('fieldLabels', {'FID': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'FID_School': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SCHOOL_': 'no label', 'SCHOOL_ID': 'no label', 'SCHDIST04_': 'no label', 'SCHDIST041': 'no label', 'SCH_LATEST': 'no label', 'SCH_LATE_1': 'no label', 'SCHOOLDIST': 'no label', 'POLYTYPE': 'no label', 'PRIMARYPOL': 'no label', 'USERNAME': 'no label', 'UPDATE_': 'no label', 'EDITED': 'no label', 'RPOLY_': 'no label', 'LPOLY_': 'no label', 'EACODE': 'no label', 'District2': 'no label', 'Inst_ID': 'no label', 'SchDist': 'no label', 'FID_BOCES_': 'no label', 'SEDdir_BOC': 'no label', 'SEDdir_B_1': 'no label', 'Shape_Leng': 'no label', 'OID_': 'no label', 'ID': 'no label', 'INSTITID': 'no label', 'SED_CODE_1': 'no label', 'POPULAR_NA': 'no label', 'INSTPECD': 'no label', 'INSTSUBYPE': 'no label', 'INSSUBDE': 'no label', 'MUNICODE': 'no label', 'SDLCODE': 'no label', 'ORPTSCOD_1': 'no label', 'Shape_Le_1': 'no label', 'instidNUM': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_ChautauquaCountySchoolsdemographics_3.set('fieldLabels', {'School Name': 'inline label - visible with data', 'LAT': 'hidden field', 'LON': 'hidden field', 'YEAR': 'hidden field', 'Title 1 Eligible': 'inline label - visible with data', 'K12 total enrollment': 'inline label - visible with data', '% Black': 'inline label - visible with data', '% Hispanic': 'inline label - visible with data', '% White': 'inline label - visible with data', '% Multiracial': 'inline label - visible with data', '% with disabilities': 'inline label - visible with data', '% econ disadvantaged': 'inline label - visible with data', '% homeless': 'inline label - visible with data', '% in foster care': 'inline label - always visible', });
lyr_ChautauquaCountySchools_4.set('fieldLabels', {'School Name': 'inline label - visible with data', 'Address': 'hidden field', 'City': 'hidden field', 'State': 'hidden field', 'ZIP': 'hidden field', 'LAT': 'hidden field', 'LON': 'hidden field', 'Contact Name': 'inline label - visible with data', 'Title': 'inline label - visible with data', 'Phone': 'hidden field', 'Contact email': 'inline label - visible with data', });
lyr_ChautauquaCountySchools_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});