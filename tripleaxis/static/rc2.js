Ext.onReady(function() {

var button = Ext.create('Ext.Button',{
		text: 'Calcuate',
		handler: calculateHandler,
});

function calculateHandler(button, event){
	
	params = {'calculator': []};
	params.rescal=[];
	
	var horcoll		= Ext.ComponentQuery.query('panel #resultsPanel')[0].getComponent('collimations').query('textfield[name="horizcoll"]')[0].value;
	var vertcoll	= Ext.ComponentQuery.query('panel #resultsPanel')[0].getComponent('collimations').query('textfield[name="vertcoll"]')[0].value;

	// var h				=
	// var k				=	
	// var l				=
	// var w				=
	// var fixenergy	=
	// var fxunit		= // combine with fixenergy
	// var monsaic		=
	// var monunit		= // combine with monsaic
	// var analymos	=
	// var anaunit		= // combine with analymos
	// var shorzmos	=
	// var svertmos	=
	// var abc			=
	// var abg			=
	// var ort1			=
	// var ort2			=

	params.rescal.push({
		horcoll 		: horcoll,
		vertcoll 	: vertcoll,
		// h				: 
		// k				:	
		// l				:
		// w				:
		// fixenergy	:
		// monsaic		:
		// analymos		:
		// shorzmos		:
		// svertmos		:
		// abc			:
		// abg			:
		// ort1			:
		// ort2			:
	});
	
};	 //end calculateHandler function

var data = Ext.JSON.encode();

//=====================================================================
var Collimations = {
	title: 'Collimations',
	itemID: 'collimations',
	bodyPadding: 20,
	border: 0,
	items: [{
		layout: {
		 type: 'hbox',
	 	},
		  border: 0,
	  	  defaults : {
                    style: {'margin': '0px 5px 5px 0px',
                            'paddingRight':20,
                    },
					  },
	 
	 items: [{	
			  xtype: 'textfield',
			  name: 'horizcoll',
			  fieldLabel: 'Horizontal collimator',
			  labelWidth: 130,
			  value: '40'
	  },{
		  xtype: 'displayfield',
		  fieldLabel: 'min (e.g., 40 or 40 47 40 200)',
		  name: 'horizcoll_example',
		  labelSeparator: '',
		  labelWidth: 300							  
	  }]
  },{
						layout: {
						 type: 'hbox'
					 	},
						  border: 0,
					  	  defaults : {
			                       style: {'margin': '0px 5px 5px 0px',
			                               'paddingRight':20,
			                       },
									  },
					 
					 items: [{	
							  xtype: 'textfield',
							  name: 'vertcoll',
							  fieldLabel: 'Vertical collimator',
							  labelWidth: 130,
							  value: '120'
 						  },{
						  xtype: 'displayfield',
						  fieldLabel: 'min (e.g., 120 or 120 120 120 120)',
						  name: 'vertcoll_example',
						  labelSeparator: '',
						  labelWidth: 300,
 						  }]					  	
					  }], 
}; 

//=====================================================================
var Orientation = {
	title: 'Orientation',
	itemID: 'orientation',
	bodyPadding: 20,
	border: 0,
	items: [{
		  xtype: 'textfield',
		  name: 'Orien1',
		  fieldLabel: 'Orientation 1',
		  value: '1 0 0',
		  afterBodyEl: 'Example'
		},{
		  xtype: 'textfield',
		  name: 'Orien2',
		  fieldLabel: 'Orientation 2',
		  value: '0 1 0'
		}] // Orientataion textfield
};

//=====================================================================
var Lattice = {
	title: 'Lattice',
	itemID: 'lattice',
	bodyPadding: 20,
	border: 0,
	items:[{
	  layout: {
			  type: 'hbox',
		  },
	  border: 0,
	  defaults : {
            style: {
				'margin': '0px 5px 5px 0px',
				'paddingRight':20,
			},},
	  items: [{
			  xtype: 'textfield',
			  name: 'abc',
			  fieldLabel: 'a b c',
			  value: '6.28 6.28 6.28',
			  labelWidth: 50,
		  },{
			  xtype: 'displayfield',
			  //border: 0,
			  labelWidth: 200,
			  fieldLabel: '&#8491 (e.g., 6.28 or 3 4 5)',
			  labelSeparator: '',
			  name: 'abc_sample',
		  }] // End 1st row
	  },{
	  layout: {
			  type: 'hbox',
			},
	  border: 0,
	  defaults : {
            style: {
					'margin': '0px 5px 5px 0px',
					'paddingRight':20,
              },},
	  items: [{
			  xtype: 'textfield',
			  name: 'albega',
			  fieldLabel: '&#945 &#946 &#947',
			  value: '90',
			  labelWidth: 50,
		  }, {
			  xtype: 'displayfield',
			  border: 0,
			  labelWidth: 200,
			  fieldLabel: 'degrees (e.g.,90 or 90 90 120)',
			  labelSeparator: '',
			  name: 'degrees',
		  }] // End 2nd row
	  }] // End Lattice tab
};

//=====================================================================
var Energy = {
	title: 'Energy',
	itemID: 'energy',
	bodyPadding: 20,
	border: 0,
	items: [{
			layout: {
					type: 'hbox',
				},
			border: 0,
			defaults : {
			style: {
					'margin': '0px 5px 5px 0px',
					'paddingRight':20},
				},
			 items: [{
					 xtype: 'displayfield',
					 fieldLabel: 'Fixed Energy',
					 labelWidth: 'auto',
					 labelSeparator: '',
				 }, {	
					  xtype: 'displayfield',
					  name: 'fxunit',
					  fieldLabel: '<select name="fixenergy" style="width: auto; height: auto; font-size: 12px"><option value="ei">Ei</option><option value="ef">EF</option></select>',
					  labelWidth: 'auto',
					  labelSeparator: '',
			    }, {
					 xtype: 'textfield',
					 name: 'fixenergy',
					 value: '14.7',
					 width: 100,
					 labelSeparator: '',		 
			    }, {
					  xtype: 'displayfield',  
					  fieldLabel: 'meV (energy transfer)',
					  labelSeparator: '',
					  name: 'w_example',
					  labelWidth: 'auto',
			  }]								  
		  }] //End items; Energy textfield
};

//=====================================================================
var Hklw ={
	title: 'H-K-L-&#969',
	itemID: 'hklw',
  bodyPadding: 20,
  border: 0,
  items: [{
	  border: 0,
	  html: '<p> Enter one value of h, k, l, &#969 for each point: </p>'						  	
	  },
	  {
	  layout:{
		  type: 'hbox',
		  aligen: 'middle',
	  },
	  border: 0,
  	  defaults : {
		  			style: {'margin': '0px 5px 5px 0px',
					'paddingRight':20},
					},
					 items: [{	
							  xtype: 'textfield',
							  name: 'h',
							  fieldLabel: 'h',
							  labelWidth: 30,
						  	  width: 185,
							  value: '1'
 						  },{
							xtype: 'displayfield',  
							  // border: 0,
							  // html: '(e.g., 1 or 1 2 3 4 &#0133)'
						  fieldLabel: '(e.g. 1 or 1 2 3 4 &#0133)',
					  labelSeparator: '',
						  name: 'h_example',
						  labelWidth: 300,
 						  }]	
  },{
	  xtype: 'textfield',
	  name: 'k',
	  fieldLabel: 'k',
	  value: '0',
	  labelWidth: 30
  },{
	  xtype: 'textfield',
	  name: 'l',
	  fieldLabel: 'l',
	  value: '0',
	  labelWidth: 30
  },{
	  layout:{
		  type: 'hbox',
	  },
	  border: 0,
  	  defaults : {
		  			style: {'margin': '0px 5px 5px 0px',
					'paddingRight':100},
					},
					 items: [{	
							  xtype: 'textfield',
							  name: 'w',
							  fieldLabel: '&#969',
							  labelWidth: 30,
						  width: 185,
							  value: '0'
 						  },{
							xtype: 'displayfield',  
						  fieldLabel: 'meV (energy transfer)',
					  labelSeparator: '',
						  name: 'w_example',
						  labelWidth: 300,
 						  }]								  
  }] // h-k-l-w textfield	
};

//=====================================================================
var Mosaic = {
	itemID: 'mosaic',
	title: 'Mosaic',
	bodyPadding: 20,
	border: 0,
	items: [{
	  layout:{
			  type: 'hbox',
			  height: 'auto',	  
		  },
	  border: 0,
  	  defaults : {
	  			style: {'margin': '0px 5px 5px 0px',
				'paddingRight':100},
			},
		items: [{	
				xtype: 'textfield',
				name: 'monmosaic',
				fieldLabel: 'Monochromator mosaic',
				value: '30',
				width: 305,
				labelWidth: 150
			},{
				xtype: 'displayfield',
				width: 35,  
				fieldLabel: 'min &tau;',
				labelSeparator: '',
				name: 'monchrom_example',
			},{
				xtype: 'displayfield',
				name: 'monunit',
				fieldLabel:'<select name="monc" style= "width: auto; height: auto; font-size: 12px"><option value="pg002">pg(002)</option><option value="pg001">pg(001)</option><option value="ge111">ge(111)</option><option value="ge220">ge(220)</option><option value="ge311">ge(311)</option><option value="be002">be(002)</option><option value="pg110">pg(110)</option></select>',
				labelSeparator: '',
			}]								  
	  },{
	  layout:{
			  type: 'hbox',
		  },
	  border: 0,
  	  defaults : {
				style: {'margin': '0px 5px 5px 0px',
				'paddingRight':20},
			},
	 items: [{	
				xtype: 'textfield',
				name: 'analmosaic',
				fieldLabel: 'Analyzer mosaic',
				value: '30',
				width: 305,
				labelWidth: 150,
			},{
				xtype: 'displayfield',
				width: 35,  
				fieldLabel: 'min &tau; &nbsp',
				labelSeparator: '',
				name: 'analyz_example',
			},{
				xtype: 'displayfield',
				name: 'anaunit',
				fieldLabel: '<select name="analyzer" style="width: auto; height: auto; font-size: 12px"><option value="pg002">pg(002)</option><option value="pg001">pg(001)</option><option value="ge111">ge(111)</option><option value="ge220">ge(220)</option><option value="ge311">ge(311)</option><option value="be002">be(002)</option><option value="pg110">pg(110)</option><option value="2axis">2axis</option></select>',
				labelSeparator: ' ',
			}]			
	  },{
	  layout:{
			  type: 'hbox',
		  },
	  border: 0,
  	  defaults : {
	  			style: {'margin': '0px 5px 5px 0px',
				'paddingRight':100},
			},
		items: [{	
				xtype: 'textfield',
				name: 'horzmosaic',
				fieldLabel: 'Sample horz mosaic',
				value: '30',
				width: 305,
				labelWidth: 150
			},{
				xtype: 'displayfield',  
				fieldLabel: 'min',
				labelSeparator: '',
				name: 'horz_example',
			}]								  
		},{
	  layout:{
		  type: 'hbox',
	  },
	  border: 0,
  	  defaults : {
	  			style: {'margin': '0px 5px 5px 0px',
				'paddingRight':100},
			},
		items: [{	
				xtype: 'textfield',
				name: 'vertmosaic',
				fieldLabel: 'Sample vert mosaic',
				value: '30',
				width: 305,
				labelWidth: 150
			},{
				xtype: 'displayfield',  
				fieldLabel: 'min',
				labelSeparator: '',
				name: 'vert_example',
			}]									  
  }] // Mosaic textfield
};

//=====================================================================
var resultsPanel = Ext.create('Ext.tab.Panel', {
	 itemID: 'resultsPanel',
	 bodyPadding: 20,
    width: 800,
    height: 300,
	 fbar: [button],
	 activeTab: 0,
    items: [Collimations,Hklw,Energy,Mosaic,Lattice,Orientation]                             
});

//=====================================================================
var dataGrid = Ext.create('Ext.grid.Panel',{
	title: 'Resolution table',
	// store: '',
	columns: [
			{ text: 'Horizontal collimator', width: 'fit', align: 'center'},
			{ text: 'Vertical collimator', width: 'fit', align: 'center'},
			{ text: 'h', width: 'fit', align: 'center'},
			{ text: 'k', width: 'fit', align: 'center'},
			{ text: 'l', width: 'fit', align: 'center'},
			{ text: '&#969', width: 'fit', align: 'center'}, 
			{ text: 'Fixed Energy', width: 'fit', align: 'center'}, 
			{ text: 'Mon. Mosaic', width: 'fit', align: 'center'}, 
			{ text: 'Analyzer Mosaic', width: 'fit', align: 'center'}, 
			{ text: 'E.g. horz Mosaic', width: 'fit', align: 'center'}, 
			{ text: 'E.g. vert Mosaic', width: 'fit', align: 'center'}, 
			{ text: 'a b c', width: 'fit', align: 'center'}, 
			{ text: '&#945 &#946 &#947', width: 'fit', align: 'center'}, 
			{ text: 'Orientation 1', width: 'fit', align: 'center'},
			{ text: 'Orientation 2', width: 'fit', align: 'center'},
		],
		height: 'fit',
//		forceFit: 'true',
});

var Table = {
	bodyPadding: 0,
	border: 0,
	layout: 'fit',
	items: [dataGrid],
};

//=====================================================================
var Graph = {
	bodyPadding: 20,
	border: 0,
	xtype: 'displayfield',
	fieldLabel: 'Graph',
};

//=====================================================================
var bottomPanel = Ext.create('Ext.tab.Panel',{
 	bodyPadding: 10,
   width: 800,
   height: 300,
	activeTab: 1,
//   renderTo: Ext.getBody(),
	items:[{
			title: 'Graph',
			items:[Graph],
		},{
			title: 'Table',
			items:[Table],
		}],
});

//=====================================================================
var rescalContainer = Ext.create('Ext.container.Container',{

	region: 'center',
	layout: {
		type: 'vbox',
	},
	border :0,
	//renderTo: Ext.getBody(),
	items:[{
			border: 0,
			items: [resultsPanel],
		},{
			border: 0,
			items: [bottomPanel],
		}] //End items
}); // End rescalConatiner

rescalContainer.render('tab1');

//=====================================================================

}); //Ext.onReady