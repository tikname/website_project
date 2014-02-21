Ext.onReady(function() {

Ext.namespace('resolution')

Ext.regModel('resultsModel', {
        fields:[
            {name:'horcoll', type:'string'},
	    {name:'vertcoll', type:'string'},
	     {name:'h', type:'string'},
	      {name:'k', type:'string'},
	       {name:'l', type:'string'},
	        {name:'w', type:'string'},
		 {name:'fixE', type:'string'},
		  {name:'monsaic', type:'string'},
		   {name:'analymos', type:'string'},
		    {name:'horzs', type:'string'},
		     {name:'verts', type:'string'},
		      {name:'abc', type:'string'},
		       {name:'abg', type:'string'},
		        {name:'ort1', type:'string'},
			{name:'ort2', type:'string'},
            
        ]
    });	
	
var button = Ext.create('Ext.Button',{
		text: 'Calcuate',
		handler: calculateHandler,
});

resolution.successFunction = function(response) {

    var results = Ext.decode(response);
	 
	// dataGrid.store.clearData();
	dataGrid.store.clearData();
	


	
	//for(var i=0; i<results.length;i++){
				var item={};
				item.horcoll 	= results.rescal[0]['horcoll'];
				item.vertcoll 	= results.rescal[0]['vertcoll'];
				item.h				= results.rescal[0]['h'];
				item.k				=  results.rescal[0]['k'];
				item.l				= results.rescal[0]['l'];
				item.w				= results.rescal[0]['w'];
				item.fixE			= results.rescal[0]['fixenergy'];
				item.monsaic		= results.rescal[0]['monsaic'];
				item.analymos	= results.rescal[0]['analymos'];
				item.horzs		= results.rescal[0]['horzs'];
				item.verts		= results.rescal[0]['verts'];
				item.abc			= results.rescal[0]['abc'];
				item.abg			= results.rescal[0]['abg'];
				item.ort1			= results.rescal[0]['ort1'];
				item.ort2			= results.rescal[0]['ort2'];
			
		        
			var itemModel = Ext.create('resultsModel',item);

			dataGrid.store.data.add(itemModel);

	//	} // end for 
	
		dataGrid.getView().refresh();
    } 


function calculateHandler(button, event){
	
	params = {'calculator': []};
	params.rescal=[];
	
	var horiz = Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=horizcoll]')[0].getValue();
	var vert 	= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=vertcoll]')[0].getValue();
	var h 		= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=h]')[0].getValue();
	var k		= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=k]')[0].getValue();
	var l		= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=l]')[0].getValue();
	var w		= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=w]')[0].getValue();
	var fixE 	= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=fixenergy]')[0].getValue();
	var mons	= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=monmosaic]')[0].getValue();
	var anas	= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=analmosaic]')[0].getValue();
	var horzs	= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=horzmosaic]')[0].getValue();
	var verts	= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=vertmosaic]')[0].getValue();
	var albega = Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=albega]')[0].getValue();
	var abc   = Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=abc]')[0].getValue();
	var orien1 = Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=Orien1]')[0].getValue();
	var orien2 = Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('textfield[name=Orien2]')[0].getValue();
	var monsUnit	= Ext.ComponentQuery.query('panel[itemID=resultsPanel]')[0].query('displayfield[name=monunit]')[0].getValue();


	params.rescal.push({
		horcoll 		: horiz,
		vertcoll 	: vert,
		h				: h,
		k				: k,
		l				: l,
		w				: w,
		fixenergy	: fixE,
		monsaic		: mons+monsUnit,
		analymos		: anas,
		horzs			: horzs,
		verts			: verts,
		abc			: abc,
		abg			: albega,
		ort1			: orien1,
		ort2			: orien2,
	});
	
	var data = Ext.JSON.encode(params);
	$.ajax({
		url: '/res_calculator',
		type: 'POST',
		data: {'data': data},
		success: function(response) {
			resolution.successFunction(response);
		},
	});

};	 //end calculateHandler function

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
                                //width:          80,
                                //xtype:          'combo',
                                //queryMode:      'local',
                                //value:          'pg(002)',
                                //triggerAction:  'all',
                                //forceSelection: true,
                                //editable:       false,
                                ////fieldLabel:     'name',
                                //name:           'title',
                                //displayField:   'name',
                                //valueField:     'value',
                                //store:          Ext.create('Ext.data.Store', {
                                    //fields : ['name', 'value'],
                                    //data   : [
                                        //{name : 'pg(002)',   value: 'pg002'},
                                        //{name : 'pg(001)',  value: 'pg001'},
                                        //{name : 'ge(111)', value: 'ge111'}
                                    //]
                                //})
				
				xtype: 'displayfield',
				name: 'monunit',
				value:'<select name="monc" style= "width: auto; height: auto; font-size: 12px"><option value="pg002">pg(002)</option><option value="pg001">pg(001)</option><option value="ge111">ge(111)</option><option value="ge220">ge(220)</option><option value="ge311">ge(311)</option><option value="be002">be(002)</option><option value="pg110">pg(110)</option></select>',
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
resolution.resultsPanel = Ext.create('Ext.tab.Panel', {
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
	// store: rawData,
	columns: [
			{ header: 'Horizontal collimator', width: 'fit', align: 'center', dataIndex: 'horcoll'},
			{ header: 'Vertical collimator', width: 'fit', align: 'center', dataIndex: 'vertcoll'},
			{ header: 'h', width: 'fit', align: 'center', dataIndex: 'h'},
			{ header: 'k', width: 'fit', align: 'center', dataIndex: 'k'},
			{ header: 'l', width: 'fit', align: 'center', dataIndex: 'l'},
			{ header: '&#969', width: 'fit', align: 'center', dataIndex: 'w'}, 
			{ header: 'Fixed Energy', width: 'fit', align: 'center', dataIndex: 'fixE'}, 
			{ header: 'Mon. Mosaic', width: 'fit', align: 'center', dataIndex: 'monsaic'}, 
			{ header: 'Analyzer Mosaic', width: 'fit', align: 'center', dataIndex: 'analymos'}, 
			{ header: 'E.g. horz Mosaic', width: 'fit', align: 'center', dataIndex: 'horzs'}, 
			{ header: 'E.g. vert Mosaic', width: 'fit', align: 'center', dataIndex: 'verts'}, 
			{ header: 'a b c', width: 'fit', align: 'center', dataIndex: 'abc'}, 
			{ header: '&#945 &#946 &#947', width: 'fit', align: 'center', dataIndex: 'abg'}, 
			{ header: 'Orientation 1', width: 'fit', align: 'center', dataIndex: 'ort1'},
			{ header: 'Orientation 2', width: 'fit', align: 'center', dataIndex: 'ort2'},
		],
		height: 260,
		scroll: true,
		//collapsible: true,
		//forceFit: 'true',
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
resolution.bottomPanel = Ext.create('Ext.tab.Panel',{
	itemID: 'bottomPanel',
   width: 800,
   height: 300,
	activeTab: 1,
//   renderTo: Ext.getBody(),
	items:[{
			title: 'Graph',
			items:[Graph],
		},{
			title: 'Table',
			items:[dataGrid],
		}],
});


//=====================================================================
resolution.rescalContainer = Ext.create('Ext.container.Container',{
	itemID:"bigContainer",
	region: 'center',
	layout: {
		type: 'vbox',
	},
	border :0,
	//renderTo: Ext.getBody(),
	items:[{
			border: 0,
			items: [resolution.resultsPanel],
		},{
			border: 0,
			items: [resolution.bottomPanel],
		}] //End items
}); // End rescalConatiner


resolution.rescalContainer.render('tab1');

//=====================================================================

}); //Ext.onReady
