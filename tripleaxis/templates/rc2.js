Ext.onReady(function() {
	
var button = Ext.create('Ext.Button',{
		text: 'Calcuate',
});	

//=====================================================================
var Collimations = {
	bodyPadding: 20,
	border: 0,
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
     bodyPadding: 20,
	  border: 0,
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
};
//=====================================================================
var Lattice = {
  bodyPadding: 20,
  border: 0,
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
};
//=====================================================================
var Energy = {
  bodyPadding: 20,
  border: 0,
  items: [{
	  layout: {
		  type: 'hbox',
		  pack: 'start',
	  },
	  border: 0,
  	  defaults : {
		  			style: {'margin': '0px 5px 5px 0px',
					'paddingRight':20},
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
};
//=====================================================================
var Hklw ={
  bodyPadding: 20,
  border: 0,
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
  bodyPadding: 20,
  border: 0,
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
					'paddingRight':20},
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
};



//=====================================================================
//=====================================================================
var resultsPanel = Ext.create('Ext.tab.Panel', {
//    title: 'Results',

	 bodyPadding: 10,
    width: 700,
    height: 300,
    renderTo: Ext.getBody(),
	 fbar: [button],
//    layout: {
//        type: 'vbox',       // Arrange child items vertically
//        align: 'center',    // Each takes up full width
//        padding: 20,
//    },

    items: [{               
	     title: 'Collimations',
        items: [Collimations],                             
    },
	 {
		 title: 'H-K-L-&#969',
		 items: [Hklw],
    },
	 {
		 title: 'Energy',
		 items: [Energy],
    },
	 {
		 title: 'Mosaic',
		 items: [Mosaic],
	  },
	 {
		 title: 'Lattice',
		 items: [Lattice],
    },
	 {
		 title: 'Orientation',
		 items: [Orientation],
    }],
});

//=====================================================================
//=====================================================================
var Table = {
	bodyPadding: 20,
	border: 0,
	xtype: 'displayfield',
	fieldLabel: 'Table',
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
   width: 700,
   height: 300,
   renderTo: Ext.getBody(),
	items:[{
		title: 'Graph',
		items:[Graph],
	},
	{
		title: 'Table',
		items:[Table],
	},],
});
resultPanel.render('tab1');
bottomPanel.render('tab2');
//=====================================================================
//=====================================================================

}); //Ext.onReady