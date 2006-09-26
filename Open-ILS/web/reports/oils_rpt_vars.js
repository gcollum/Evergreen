/* dom nodes with IDs are inserted into DOM as DOM[id] */
var DOM = {};

/* JS object version of the IDL */
var oilsIDL;

/* the currently building report */
var oilsRpt;

/* UI tree  */
var oilsRptTree;

/* UI tree of report folders */
var oilsRptFolderTree;

/* URL to retrieve the IDL from */
var OILS_IDL_URL = "/reports/fm_IDL.xml";

/* multi-select which shows the user 
	what data they want to see in the report */
var oilsRptDisplaySelector;

var oilsRptFilterSelector;

/* display the currently building report object in an external window */
var oilsRptDebugWindow;

/* if true, show the debugging window */
var oilsRptDebugEnabled = false;

var oilsMouseX;
var oilsMouseY;
var oilsPageXMid;
var oilsPageYMid;

var oilsIDLReportsNS = 'http://open-ils.org/spec/opensrf/IDL/reporter/v1';
var oilsIDLPersistNS = 'http://open-ils.org/spec/opensrf/IDL/persistance/v1';

/* the current transform manager for the builder transform window */
var oilsRptCurrentTform;

/* the current transform manager for the builder filter window */
var oilsRptCurrentFilterTform;

/* the current operation manager for the filter window */
var oilsRptCurrentFilterOpManager;

var OILS_RPT_FETCH_FOLDERS = 'open-ils.reporter:open-ils.reporter.folder.visible.retrieve';
var OILS_RPT_FETCH_FOLDER_DATA = 'open-ils.reporter:open-ils.reporter.folder_data.retrieve';

var oilsRptCurrentFolderManager;
