// Create handler function 
// Look for calculatehandler
// check webrefine file for reference


Ext.onReady(function() {
	
	
	// Ext.namespace("energyUnit");
	// Ext.namespace("mosaicUnit");
	// 
	// var mins1 = Ext.create('Ext.data.Store',{
	// 	fields:['name'],
	// 	data: [
	// 				{"name": "pg(002)"},
	// 				{"name": "pg(001)"},
	// 				{"name": "ge(111)"},
	// 				{"name": "ge(220)"},
	// 				{"name": "ge(311)"},
	// 				{"name": "be(002)"},
	// 				{"name": "pg(110)"},
	// 		]
	// });
	// 
	// var mins2 = Ext.create('Ext.data.Store',{
	// 	fields:['name'],
	// 	data: [
	// 				{"name": "pg(002)"},
	// 				{"name": "pg(001)"},
	// 				{"name": "ge(111)"},
	// 				{"name": "ge(220)"},
	// 				{"name": "ge(311)"},
	// 				{"name": "be(002)"},
	// 				{"name": "pg(110)"},
	// 				{"name": "2 axis"},
	// 		]
	// });	
	// 
	// var enunit = Ext.create('Ext.data.Store',{
	// 	fields:['name'],
	// 	data:[
	// 				{"name": "Ei"},
	// 				{"name": "Ef"},
	// 	]
	// });
	
   // structureFactors.spaceGroupSettingCombo= Ext.create('Ext.form.ComboBox', {
   //     fieldLabel: 'Space Group Setting',
   //     store: spaceGroups,
   //     queryMode: 'local',
   //     itemId: 'SpaceGroupSettingCombo',
   //     displayField: 'name',
   //     valueField: 'abbr'
   // });
	// 	
	// mosaicUnit.monchromUnit = Ext.create('Ext.form.ComboBox',{
	// 	fieldLabel: '',
	// 	store: mins1,
	// 	queryMode: 'local',
	// 	itemId: 'monchromUnit',
	// 	displayField: 'name',
	// 	valueField: 'name',
	// 	value: 'pg(002)',	
	// });
	// 
	// mosaicUnit.analyzeUnit = Ext.create('Ext.form.CombBox',{
	// 	fieldLabel: '',
	// 	store: mins2,
	// 	queryMode: 'local',
	// 	itemId: 'analyzeUnit',
	// 	displayField: 'name',
	// 	valueField: 'name',
	// 	
	// });
	
	
	var button = Ext.create('Ext.Button',{
		text: 'Calcuate',
	});
	
	var collimation = Ext.
//-------------------------------------------------------------------------------------------

    // var myTabs = new Ext.create('Ext.container.Viewport', {
    //     layout: 'border',
    var myTabs = new Ext.create('Ext.container.Container',{
        resizeTabs: true, // turn on tab resizing
        minTabWidth: 115,
        tabWidth: 135,
        enableTabScroll: true,
        width: 1150,
        height: 800,
       // activeItem: 'webrefinetab', //Making the calculator tab selected first
        defaults: {autoScroll:true},
	 
        items: [{
            region: 'center',
            xtype: 'tabpanel',
				autoScroll: true,
				dockedItems: [{
					xtype: 'toolbar',
					dock: 'bottom',
					border: false,
					items: button,
					//padding: 20,
				}],
                items: [

//-------------------------------------------------------------------------------------------					 
					 
					 {
						title: "Collimations",
						bodyPadding: 20,
						items: [{
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
					  }, {
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
					  }, button]
				  }, 
						  
//-------------------------------------------------------------------------------------------						  
						  
						  {
                    title: "H-K-L-&#969",
						  bodyPadding: 20,
						  items: [{
							  border: 0,
							  html: '<p> Enter one value of h, k, l, &#969 for each point: </p>'						  	
						  },
							  {
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
                    },
						  
//-------------------------------------------------------------------------------------------						  
						  
						  {
                    title: "Energy",
						  bodyPadding: 20,
						  items: [{
							  layout: {
								  type: 'hbox',
								  pack: 'start',
							  },
							  border: 0,
						  	  defaults : {
								  			style: {'margin': '0px 5px 5px 0px',
											'paddingRight':1},
											},
					  					 items: [{	
					  							  xtype: 'displayfield',
					  							  fieldLabel: 'Fixed Energy <select><option value="ei">Ei</option><option value="ef">EF</option></select>',
					  							  //value: '14.7',
												  labelWidth: 130,
												  labelSeparator: '',
 									    }, {
											 xtype: 'textfield',
											 name: 'fixenergy',
											 value: '14.7',
											 labelSeparator: '',		 
 									    },
										 {
											  xtype: 'displayfield',  
					  						  fieldLabel: 'meV (energy transfer)',
											  labelSeparator: '',
					  						  name: 'w_example',
					  						  labelWidth: 300,
					   				  }]								  
						  }] //Energy textfield
                    }, 
						  
//-------------------------------------------------------------------------------------------						  
						  
						  {
                    title: "Mosaic",
						  bodyPadding: 20,
						  items: [{
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
			  							  name: 'monmosaic',
			  							  fieldLabel: 'Monochromator mosaic',
			  							  value: '30',
										  width: 305,
			  							  labelWidth: 150
					   						  },{
													xtype: 'displayfield',
													width: 30,  
							  						fieldLabel: 'min &tau;',
											  labelSeparator: '',
					  						  name: 'monchrom_example',
					   						  },{
					   						  	xtype: 'displayfield',
													fieldLabel: '<select><option value="pg002">pg(002)</option><option value="pg001">pg(001)</option><option value="ge111">ge(111)</option><option value="ge220">ge(220)</option><option value="ge311">ge(311)</option><option value="be002">be(002)</option><option value="pg110">pg(110)</option></select>',
													labelSeparator: '',
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
			  							  name: 'analmosaic',
			  							  fieldLabel: 'Analyzer mosaic',
			  							  value: '30',
										  width: 305,
			  							  labelWidth: 150
					   						  },{
													xtype: 'displayfield',
													width: 30,  
							  						fieldLabel: 'min &tau;',
											  labelSeparator: '',
					  						  name: 'analyz_example',
					   						  },{
					   						  	xtype: 'displayfield',
													fieldLabel: '<select><option value="pg002">pg(002)</option><option value="pg001">pg(001)</option><option value="ge111">ge(111)</option><option value="ge220">ge(220)</option><option value="ge311">ge(311)</option><option value="be002">be(002)</option><option value="pg110">pg(110)</option><option value="2axis">2axis</option></select>',
													labelSeparator: '',
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
                    }, 
						  
//-------------------------------------------------------------------------------------------						  
						  
						  {
                    title: "Lattice",
                    bodyPadding: 20,
						  items:[{
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
			                       style: {'margin': '0px 5px 5px 0px',
			                               'paddingRight':20,
			                       },
									  },
							  items: [{
									  xtype: 'textfield',
									  name: 'albega',
									  fieldLabel: '&#945 &#946 &#947',
									  value: '90',
									  labelWidth: 50,
							  },{
									  xtype: 'displayfield',
									  border: 0,
									  labelWidth: 200,
									  fieldLabel: 'degrees (e.g.,90 or 90 90 120)',
									  labelSeparator: '',
									  name: 'degrees',
							  }] // End 2nd row
                   }] // End Lattice tab
					  }, 
					  
//-------------------------------------------------------------------------------------------					  
					  
					  {
                    title: "Orientation",
	                    bodyPadding: 20,
							  items: [{
								  xtype: 'textfield',
								  name: 'Orien1',
								  fieldLabel: 'Orientation 1',
								  value: '1 0 0',
								  afterBodyEl: 'Example'
							  },
							  {
								  xtype: 'textfield',
								  name: 'Orien2',
								  fieldLabel: 'Orientation 2',
								  value: '0 1 0'
							  }] // Orientataion textfield
                }]
            }, // end of North region 
				
//-------------------------------------------------------------------------------------------				
				
            {
            region: 'south',
         // collapsible: true,
            split: true,
				bodyPadding: 20,
            xtype: 'tabpanel',
            height: 300,
            minheight: 300,
				scroll: true,
            split: true,
                items: [{
                    title: "Graph",
                    html: 'Graph Page'
                    }, {
                    title: "Table",
                    html: 'Table page'
                }]
        }]
    });
	 myTabs.render('tabs');
});