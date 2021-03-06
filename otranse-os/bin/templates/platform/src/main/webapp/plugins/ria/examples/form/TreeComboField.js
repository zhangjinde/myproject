Ext.onReady(function(){
	var form = new Ext.form.FormPanel({
		title : '员工管理',
		renderTo:'example',
		width : 300, height : 300,
		labelWidth:60,
		frame:true,
		defaultType:'textfield',
		labelAlign:'right',
		defaults:{anchor:'-20'},
		bodyStyle : 'padding:5px;',
		items:[
			{fieldLabel:'姓名',name:'name',allowBlank:false},
			//{fieldLabel:'性别',name:'sex'},
			{
				fieldLabel:'性别',
				xtype:'radiogroup' ,
				defaults:{name : 'sex'},
				items : [
					{boxLabel:'男',inputValue:1},
					{boxLabel:'女',inputValue:0},
					{boxLabel:'保密',inputValue:1,checked:true}
				]
			},
			{name:'age',fieldLabel:'年龄',xtype:'numberfield'},
			new Disco.Ext.TreeComboField(
				{
					fieldLabel:'部门',
					name : 'dept',
					tree : new Ext.tree.TreePanel({
						border : false,
						autoScroll:true,
						rootVisible : false,
						loader : new Ext.tree.TreeLoader({
							url : 'data/tree.json'
						}),
						root : new Ext.tree.AsyncTreeNode({
							id : 'id',
							text : '部门' 
						})
					})
				}
			),{
				xtype:'textarea',
				fieldLabel:'备注',
				name : 'remark',
				height:120
			}
		],
		buttonAlign:'right',
		buttons:[
			{
				text:'submit',iconCls:'submt',
				handler:function(){
					if(form.getForm().isValid())
						Ext.Msg.alert('Form Valeus',Ext.encode(form.getForm().getValues()));
				}
				
			},{
				text:'reset',iconCls:'reset',
				handler:function(){
					form.getForm().reset();
				}
			}
		]
	});
},this);
