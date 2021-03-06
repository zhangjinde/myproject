ClientPanel = Ext.extend(Disco.Ext.CrudListPanel, {
	id : "clientPanel",
	baseUrl : "client.ejf",
	pageSize : 20,
	gridForceFit : false,
	columnLock : true,
	viewCmd:"loadClient",
    viewWin : {
        width : 628,
        height : 520,
        title : "客户基本信息查看"
    },
	// importData:true,
	// exportData:true,
	hotRender : function(v) {
		if (v) {
			switch (v) {
				case 1 :
					return "<font color=green>低热</font>";
					break;
				case 2 :
					return "<font color=blue>中热</font>";
					break;
				case 3 :
				default :
					return "<font color=red>高热</font>";
					break;
			}
		} else
			return "否";
	},
	searchWin : {
		width : 628,
		height : 333,
		title : "高级查询"
	},
    createViewPanel : function() {
        var formPanel = new Ext.form.FormPanel({
            frame : true,
            labelWidth : 70,
            labelAlign : 'right',
            layout : "fit",
            items : [{
                xtype : "tabpanel",
                deferredRender : false,
                activeTab : 0,
                listeners : {
                    "tabchange" : function(tp, tab) {
                        tab.doLayout();
                    }
                },
                items : [{
                    title : "客户基本信息",
                    autoHeight : true,
                    items : [{
                        xtype : "fieldset",
                        // title : "",
                        autoHeight : true,
                        items : [
                                {
                                    xtype : "hidden",
                                    name : "id"
                                },
                                Disco.Ext.Util.twoColumnPanelBuild(
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '客户名称',
                                            name : 'name'
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '客户缩写',
                                            name : 'shortName'
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '客户类型',
                                            name : 'types',
                                            renderer:this.objectRender("title")
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '客户来源',
                                            name : 'source',
                                            renderer:this.objectRender("title")
                                        },     
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '编号',
                                            name : 'sn'
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '行业',
                                            name : 'trade',
                                            renderer:this.objectRender("title")
                                        }, 
                                      {
                                            xtype:"labelfield",
                                            fieldLabel : '业务员',
                                            name : 'seller',
                                            renderer:this.objectRender("title")
                                        }, 
                                         {
                                           xtype:"labelfield",
                                            fieldLabel : '创立日期',
                                            name : 'birthday',
                                            invalidText : '日期格式不对',
                                            format : "Y-m-d",
                                            renderer:this.objectRender("Y-m-d")
                                        }, {
                                            xtype:"labelfield",
                                            fieldLabel : '公司法人',
                                            name : 'layMan'
                                        }, {
                                            xtype:"labelfield",
                                            fieldLabel : '注册资本',
                                            name : 'capital'
                                        }, {
                                            xtype:"labelfield",
                                            fieldLabel : '员工人数',
                                            name : 'workerNum'
                                        }), {
                                    xtype:"labelfield",
                                    anchor : "99%",
                                    fieldLabel : '经营范围',
                                    name : 'businessScope',
                                    height : 50
                                }]
                    }, {
                        xtype : "fieldset",
                        title : "客户联系信息",
                        autoHeight : true,
                        items : [
                        Disco.Ext.Util.twoColumnPanelBuild(
                        {
                                            xtype:"labelfield",
                                            fieldLabel : '所属地区',
                                            name : 'region',
                                            renderer:this.objectRender("title")
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '街道',
                                            name : 'street'
                                        }, {
                                            xtype:"labelfield",
                                            fieldLabel : '联系人',
                                            name : 'linkMan'
                                        }, {
                                            xtype:"labelfield",
                                            fieldLabel : '联系电话',
                                            name : 'tel'
                                        }, {
                                            xtype:"labelfield",
                                            fieldLabel : '邮政编码',
                                            name : 'zip'
                                        }, {
                                            xtype:"labelfield",
                                            fieldLabel : '传真号码',
                                            name : 'fax'
                                        }, {
                                            xtype:"labelfield",
                                            fieldLabel : '电子邮件',
                                            name : 'email'
                                        }), {
                                    xtype:"labelfield",
                                    anchor : "99%",
                                    fieldLabel : '详细地址',
                                    name : 'address'
                                }]
                    }]
                }, {
                    title : "客户扩展信息",
                    layout : "fit",
                    items : {
                        layout : "form",
                        bodyStyle : 'margin-top:15px',
                        items : [
                                Disco.Ext.Util.twoColumnPanelBuild(
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '主页',
                                            name : 'homePage'
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '营业额',
                                            name : 'turnover'
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '工商执照',
                                            name : 'businessLicence'
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '税务登记号',
                                            name : 'taxation'
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '开户行',
                                            name : 'bank'
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '开户行账号',
                                            name : 'bankCode'
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '保质金',
                                            name : 'qualityAssure'
                                        },
                                         {
                                            xtype:"labelfield",
                                            fieldLabel : '是否推荐',
                                            name : 'elite',
                                            renderer:this.boolenRender
                                        },
                                       {
                                            xtype:"labelfield",
                                            fieldLabel : '是否置顶',
                                            name : 'onTop',
                                            renderer:this.boolenRender
                                        },
                                        {
                                            xtype:"labelfield",
                                            fieldLabel : '是否启用',
                                            name : 'passed',
                                            renderer:this.boolenRender
                                        }), {
                                    fieldLabel : '厂商图片',
                                    xtype:"labelfield",
                                    anchor : '94%',
                                    name : 'pic'
                                }, {
                                   xtype:"labelfield",
                                    fieldLabel : '简介',
                                    name : 'intro',
                                    height : 180,
                                    anchor : "94%"
                                }]
                    }
                }]
            }]
        });
        return formPanel;
    },
	customerRender : function(v, p, r) {
		return "<a href='client.ejf?cmd=view&id=" + r.get("id")
				+ "' target='_blank' title='点击查看客户详情'>" + v + "</a>";
	},
    addClientRelateInfo:function(panel,script,otherScript){
        return function(){
             var record = this.grid.getSelectionModel().getSelected();
        if (!record) {
            Ext.Msg.alert("提示", "请先选择客户！");
            return;
        }
        Disco.Ext.Util.addObject(panel, function(){
             Ext.Msg.alert("提示","添加成功",this.refresh,this);
        }.createDelegate(this), script, otherScript,
                function(win) {
                        var client = win.findSomeThing("client");
						if (client) {
							client.setValue({
										id : record.get("id"),
										fullName : record.get("name")
									});
                            var linkMan=win.findSomeThing("linkMan");
                            if(linkMan&&linkMan.store){
                                linkMan.store.baseParams.client =record.get("id");
                            }
							win.getComponent(0).form.clearDirty();
                            
						}
                });
        }
    },
    onSave:function(form,action){
        if(form.findField("id").getValue()){
            if(action.result&&action.result.data&&action.result.data.id){
                Ext.Ajax.request({url:"linkMan.ejf?cmd=createLinkMan",params:{id:action.result.data.id}});
            }
        }
    },
    onCreate : function() {
        this.fp.form.clearDirty();
    },
   /* formFocus:function(){
        this.fp.form.findField("name").focus("",100);
    },*/
	createForm : function() {
		var formPanel = new Ext.form.FormPanel({
			frame : true,
			labelWidth : 70,
			labelAlign : 'right',
			layout : "fit",
            enterNavigationKey:true,
            navigationSequences:["name","types","source","linkMan","tel"],
			items : [{
				xtype : "tabpanel",
				deferredRender : false,
				activeTab : 0,
				listeners : {
					"tabchange" : function(tp, tab) {
						tab.doLayout();
					}
				},
				items : [{
					title : "客户基本信息",
					autoHeight : true,
					items : [{
						xtype : "fieldset",
						// title : "",
						autoHeight : true,
						items : [
								{
									xtype : "hidden",
									name : "id"
								},
								Disco.Ext.Util.twoColumnPanelBuild(
										{
											fieldLabel : '客户名称',
											name : 'name',
											helpText : "客户的全名",
											allowBlank : false,
											blankText : '客户的名称不能为空'
										},
										{
											fieldLabel : '客户缩写',
											name : 'shortName'
										},
										ConfigConst.BASE.getCompanyDictionaryCombo(
														"types", "客户类型",
														"ClientTypes"),
                                        Ext.apply({},{editable:true,typeAhead:false},ConfigConst.BASE.getCompanyDictionaryCombo(
                                            "source", "客户来源", "ClientSource",
                                            "title")),                
										{
											fieldLabel : '编号',
											name : 'sn',
											helpText : "客户的编号如果不填,则由系统自动生成一个不可重复的编号"
										}, Ext.apply({}, {},
												ConfigConst.CRM.trade),
										Ext.apply({}, {value:{id:"$!{session.EASYJF_SECURITY_USER.id}",trueName:"$!{session.EASYJF_SECURITY_USER.trueName}"}},
												ConfigConst.CRM.seller), {
											xtype : "datefield",
											fieldLabel : '创立日期',
											name : 'birthday',
											invalidText : '日期格式不对',
											format : "Y-m-d"
										}, {
											fieldLabel : '公司法人',
											name : 'layMan'
										}, {
											fieldLabel : '注册资本',
											name : 'capital'
										}, {
											xtype : "numberfield",
											fieldLabel : '员工人数',
											name : 'workerNum'
										},Ext.apply({},{fieldLabel : '是否共享',name : 'shared',hiddenName:"shared"},ConfigConst.BASE.yesNo)), {
									xtype : "textarea",
									anchor : "99%",
									fieldLabel : '经营范围',
									name : 'businessScope',
									height : 50
								}]
					}, {
						xtype : "fieldset",
						title : "客户联系信息",
						autoHeight : true,
						items : [
								Disco.Ext.Util.twoColumnPanelBuild(Ext.apply(
												{}, {},
												ConfigConst.BASE.systemRegion),
										{
											fieldLabel : '街道',
											name : 'street'
										}, {
											fieldLabel : '联系人',
											name : 'linkMan'
										}, {
											fieldLabel : '联系电话',
											name : 'tel'
										}, {
											fieldLabel : '邮政编码',
											name : 'zip'
										}, {
											fieldLabel : '传真号码',
											name : 'fax'
										}, {
											fieldLabel : '电子邮件',
											name : 'email',
											vtype : 'email',
											vtypeText : '电子邮件格式不正确(例:ksmwly@163.com)'
										}), {
									xtype : "textfield",
									anchor : "99%",
									fieldLabel : '详细地址',
									name : 'address'
								}]
					}]
				}, {
					title : "客户扩展信息",
					layout : "fit",
					items : {
						layout : "form",
						bodyStyle : 'margin-top:15px',
						items : [
								Disco.Ext.Util.twoColumnPanelBuild(
										{
											fieldLabel : '主页',
											name : 'homePage'
										},
										{
											fieldLabel : '营业额',
											name : 'turnover'
										},
										{
											fieldLabel : '工商执照',
											name : 'businessLicence'
										},
										{
											fieldLabel : '税务登记号',
											name : 'taxation'
										},
										{
											fieldLabel : '开户行',
											name : 'bank'
										},
										{
											fieldLabel : '开户行账号',
											name : 'bankCode'
										},
										{
											xtype : "numberfield",
											fieldLabel : '保质金',
											name : 'qualityAssure'
										},
										Ext.apply({}, {
													fieldLabel : '是否推荐',
													name : 'elite',
													hiddenName : 'elite'
												}, ConfigConst.BASE.yesNo),
										Ext.apply({}, {
													fieldLabel : '是否置顶',
													name : 'onTop',
													hiddenName : 'onTop'
												}, ConfigConst.BASE.yesNo),
										Ext.apply({}, {
													fieldLabel : '是否启用',
													name : 'passed',
													hiddenName : 'passed'
												}, ConfigConst.BASE.yesNo)), {
									fieldLabel : '厂商图片',
									xtype : 'textfield',
									anchor : '94%',
									name : 'pic'
								}, {
									xtype : "textarea",
									fieldLabel : '简介',
									name : 'intro',
									height : 180,
									anchor : "94%"
								}]
					}
				}]
			}]
		});
		return formPanel;
	},
	searchFormPanel : function() {
		var formPanel = new Ext.form.FormPanel({
					frame : true,
					labelWidth : 75,
					labelAlign : 'right',
					layout : "fit",
					autoHeight : true,
					items : [{
						xtype : "fieldset",
						title : "查询条件",
						autoHeight : true,
						items : [
								Disco.Ext.Util.twoColumnPanelBuild(
										{
											fieldLabel : '客户名称',
											name : 'name',
											helpText : "客户的全名"
										},

										Ext.apply({}, {
													fieldLabel : '是否推荐',
													name : 'elite',
													hiddenName : 'elite',
													disableChoice : false,
													value : "--PleaseSelectedValue--"
												}, ConfigConst.BASE.yesNo),
										Ext.apply({}, {
													fieldLabel : '是否置顶',
													name : 'onTop',
													hiddenName : 'onTop'
												}, ConfigConst.BASE.yesNo),
										Ext.apply({}, {
													fieldLabel : '是否启用',
													name : 'passed',
													hiddenName : 'passed'
												}, ConfigConst.BASE.yesNo),

										ConfigConst.BASE
												.getCompanyDictionaryCombo(
														"types", "客户类型",
														"ClientTypes"), Ext
												.apply({}, {},
														ConfigConst.CRM.trade),
										Ext.apply({}, {},
												ConfigConst.CRM.seller), {
											fieldLabel : '联系人',
											name : 'linkMan'
										}, {
											xtype : "datefield",
											fieldLabel : '创立日期(始)',
											name : 'birthday_start',
											invalidText : '日期格式不对',
											helpText : '输入一个创立日期开始日期值',
											format : "Y-m-d"
										}, {
											xtype : "datefield",
											fieldLabel : '创立日期(末)',
											name : 'birthday_end',
											invalidText : '日期格式不对',
											helpText : '输入一个创立日期结束日期值',
											format : "Y-m-d"
										}, Ext.apply({}, {},
												ConfigConst.BASE.systemRegion),
										{
											fieldLabel : '电子邮件',
											name : 'email',
											vtype : 'email',
											vtypeText : '电子邮件格式不正确(例:ksmwly@163.com)'
										}, {
											fieldLabel : '联系电话',
											name : 'tel'
										}, {
											fieldLabel : '工商执照',
											name : 'businessLicence'
										}), {
									xtype : "textfield",
									anchor : "97%",
									fieldLabel : '详细地址',
									name : 'address'
								}]
					}]
				});
		return formPanel;
	},
	createWin : function(callback, autoClose) {
		return this.initWin(628, 520, "客户信息管理", callback, autoClose);
	},
	hotSet : function() {
		var win = this.doSomeWork(450, 250, "热点设置", "hotSetPanel","hotSetPanelForm", "hotSet");
	},
	hotSetPanelForm : function() {
		var formPanel = new Ext.form.FormPanel({
					frame : true,
					labelWidth : 60,
					labelAlign : 'right',
					items : [
							{
								xtype : "hidden",
								name : "id"
							},
							Disco.Ext.Util.twoColumnPanelBuild({
										xtype : "labelfield",
										fieldLabel : '客户名称',
										name : 'name'
									}, Ext.applyIf({},
											Disco.Ext.Util.buildCombox("hot",
													"热点类型", [["低热", 1],
															["中热", 2],
															["高热", 3],
															["非热点", 0]], ""))),
							{
								items : [{
											xtype : "fieldset",
											title : "热点描述",
											autoHeight : true,
											items : [{
														xtype : "textarea",
														hideLabel : true,
														name : 'hotInfo',
														height : 100,
														anchor : '100%'
													}]
										}]
							}]
				});
		return formPanel;
	},
	storeMapping : ["id", "sn", "name", "shortName", "birthday", "region",
			"address", "zip", "tel", "fax", "layMan", "linkMan", "email",
			"trade", "street", "businessScope", "homePage", "producerType",
			"intro", "elite", "onTop", "passed", "turnover", "capital",
			"workerNum", "businessLicence", "taxation", "bank", "bankCode",
			"qualityAssure", "pic", "types", "status", "owner", "seller",
			"inputTime", "hot", "hotInfo", "updateTime", "lastVisitTime","shared"],
	initComponent : function() {
		this.columns = [{
					header : "客户名称",
					sortable : true,
					width : 150,
					locked : true,
					dataIndex : "name",
					renderer : this.customerRender
				}, {
					header : "编号",
					sortable : true,
					width : 60,
					dataIndex : "sn"
				}, {
					header : "客户类型",
					sortable : true,
					width : 60,
					dataIndex : "types",
					renderer : this.objectRender("title")
				}, {
					header : "行业",
					sortable : true,
					width : 150,
					dataIndex : "trade",
					renderer : this.objectRender("title")
				}, {
					header : "客户简写",
					sortable : true,
					width : 70,
					dataIndex : "shortName"
				}, {
					header : "联系人",
					sortable : true,
					width : 60,
					dataIndex : "linkMan"
				}, {
					header : "电子邮件",
					sortable : true,
					width : 100,
					dataIndex : "email",
					hidden : true
				}, {
					header : "联系电话",
					sortable : true,
					width : 85,
					dataIndex : "tel"
				}, {
					header : "传真号码",
					sortable : true,
					width : 80,
					dataIndex : "fax",
					hidden : true
				}, {
					header : "公司地址",
					sortable : true,
					width : 160,
					dataIndex : "address"
				}, {
					header : "邮政编码",
					sortable : true,
					width : 60,
					dataIndex : "zip",
					hidden : true
				}, {
					header : "热点",
					sortable : true,
					width : 40,
					dataIndex : "hot",
					renderer : this.hotRender
				}, {
					header : "状态",
					sortable : true,
					width : 80,
					dataIndex : "status"
				}, {
					header : "业务员",
					sortable : true,
					width : 60,
					dataIndex : "seller",
					renderer : this.objectRender("trueName")
				}, {
					header : "最近跟踪",
					sortable : true,
					width : 80,
					dataIndex : "lastVisitTime",
					renderer : this.dateRender("Y-m-d")
				}, {
					header : "更新时间",
					sortable : true,
					width : 80,
					dataIndex : "updateTime",
					renderer : this.dateRender("Y-m-d")
				}, {
					header : "创立日期",
					sortable : true,
					width : 80,
					dataIndex : "birthday",
					renderer : this.dateRender("Y-m-d")
				}, {
					header : "所在地区",
					sortable : true,
					width : 80,
					dataIndex : "region",
					renderer : this.objectRender("title"),
					hidden : true
				}, {
					header : "法人姓名",
					sortable : true,
					width : 60,
					dataIndex : "layMan",
					hidden : true
				}, {
					header : "经营范围",
					sortable : true,
					width : 60,
					dataIndex : "businessScope",
					hidden : true
				}, {
					header : "厂商主页",
					sortable : true,
					width : 160,
					dataIndex : "homePage",
					renderer : this.linkRenderer,
					hidden : true
				}, {
					header : "厂商分类",
					sortable : true,
					width : 60,
					dataIndex : "producerType",
					hidden : true
				}, {
					header : "厂商简介",
					sortable : true,
					width : 60,
					dataIndex : "intro",
					hidden : true
				}, {
					header : "是否推荐",
					sortable : true,
					width : 60,
					dataIndex : "elite",
					renderer : this.booleanRender,
					hidden : true
				}, {
					header : "是否置顶",
					sortable : true,
					width : 60,
					dataIndex : "onTop",
					renderer : this.booleanRender,
					hidden : true
				}, {
					header : "是否启用",
					sortable : true,
					width : 60,
					dataIndex : "passed",
					renderer : this.booleanRender,
					hidden : true
				}, {
					header : "营业额",
					sortable : true,
					width : 60,
					dataIndex : "turnover",
					hidden : true
				}, {
					header : "注册资本",
					sortable : true,
					width : 60,
					dataIndex : "capital",
					hidden : true
				}, {
					header : "员工数量",
					sortable : true,
					width : 60,
					dataIndex : "workerNum",
					hidden : true
				}, {
					header : "工商执照",
					sortable : true,
					width : 60,
					dataIndex : "businessLicence",
					hidden : true
				}, {
					header : "税务登记号",
					sortable : true,
					width : 60,
					dataIndex : "taxation",
					hidden : true
				}, {
					header : "开户行",
					sortable : true,
					width : 60,
					dataIndex : "bank",
					hidden : true
				}, {
					header : "银行账号",
					sortable : true,
					width : 60,
					dataIndex : "bankCode",
					hidden : true
				}, {
					header : "保质金",
					sortable : true,
					width : 60,
					dataIndex : "qualityAssure",
					hidden : true
				}, {
					header : "厂商图片",
					sortable : true,
					width : 60,
					dataIndex : "pic",
					renderer : this.imgRender,
					hidden : true
				}, {
					header : "所有者",
					sortable : true,
					width : 60,
					dataIndex : "owner",
					renderer : this.objectRender("name"),
					hidden : true
				}, {
					header : "收录时间",
					sortable : true,
					width : 60,
					dataIndex : "inputTime",
					renderer : this.dateRender("y-m-d"),
					hidden : true
				}, {
					header : "热点说明",
					sortable : true,
					width : 60,
					dataIndex : "hotInfo",
					hidden : true
				}

		];
		ClientPanel.superclass.initComponent.call(this);
	},
	quickSearch : function() {
		this.store.baseParams = Ext.apply({}, {
					types : this.btn_types.getValue(),
					hot : this.btn_hot.getValue(),
					visitDays : this.btn_visitDays.getValue(),
					updateDays : this.btn_updateDays.getValue()
				});
		this.refresh();

	},
	afterList : function() {
		this.hideOperaterItem("btn_refresh");
		this.searchField.setWidth(80);
		this.btn_view.hide();
		this.btn_types = new Ext.form.ComboBox(Ext.applyIf({
					width : 75,
					emptyText : "客户类型"
				}, ConfigConst.BASE.getCompanyDictionaryCombo("types", "客户类型",
						"ClientTypes")));
		this.btn_types.on("select", this.quickSearch, this);

		this.btn_hot = new Ext.form.ComboBox(Ext.applyIf({
					width : 75,
					allowBlank : true,
					emptyText : "热点"
				}, Disco.Ext.Util.buildCombox("hot", "", [["全部", -1],
								["低热", 1], ["中热", 2], ["高热", 2]], "")));
		this.btn_hot.on("select", this.quickSearch, this);

		this.btn_visitDays = new Ext.form.ComboBox(Ext.applyIf({
					width : 75,
					allowBlank : true,
					emptyText : "跟踪情况"
				}, Disco.Ext.Util.buildCombox("visitDays", "", [["7天未跟踪", 7],
								["15天未跟踪", 15], ["30天未跟踪", 30], ["60天未跟踪", 60],
								["100天未跟踪", 100], ["半年未跟踪", 182],
								["一年未跟踪", 365]], "")));
		this.btn_visitDays.on("select", this.quickSearch, this);

		this.btn_updateDays = new Ext.form.ComboBox(Ext.applyIf({
					width : 75,
					allowBlank : true,
					emptyText : "更新情况"
				}, Disco.Ext.Util.buildCombox("updateDays", "", [["7天未更新", 7],
								["15天未更新", 15], ["30天未更新", 30], ["60天未更新", 60],
								["100天未更新", 100], ["半年未更新", 182],
								["一年未更新", 365], ["无更新日期", -1]], "")));
		this.btn_updateDays.on("select", this.quickSearch, this);

		this.btn_relative = new Ext.Button({
					id : "btn_relative",
					cls : "x-btn-text-icon",
					iconCls : "relating",
					text : "关联信息录入",
					menu : [{
								text : "联系人",
                                handler:this.addClientRelateInfo("ClientLinkManPanel","crm/ClientLinkManPanel.js"),
                                scope:this
							},{
                                text : "客户跟进",
                                handler:this.addClientRelateInfo("ClientVisitPanel","crm/ClientVisitPanel.js"),
                                scope:this
                            },{
                                text : "客户事件",
                                handler:this.addClientRelateInfo("ClientEventPanel","crm/ClientEventPanel.js"),
                                scope:this
                            },{
								text : "任务及事项",
                                handler:this.addClientRelateInfo("BusinessWorkItemPanelList","crm/BusinessWorkItemPanel.js"),
                                scope:this
							}, {
								text : "客户关怀",
                                handler:this.addClientRelateInfo("ClientCarePanel","crm/ClientCarePanel.js"),
                                scope:this
							},"-",
                             {
                                text : "销售机会",
                                handler:this.addClientRelateInfo("BusinessOpporunityPanel","crm/BusinessOpporunityPanel.js"),
                                scope:this
                            },  {
                                text : "客户需求",
                                handler:this.addClientRelateInfo("ClientRequirementPanel","crm/ClientRequirementPanel.js"),
                                scope:this
                            }, {
                                text : "竞争对手",
                                handler:this.addClientRelateInfo("CompetitorPanel","crm/CompetitorPanel.js"),
                                scope:this
                            },
                            "-",
                            {
                                text : "销售报价",
                                handler:this.addClientRelateInfo("OrdersQuotePanel","crm/OrdersQuotePanel.js"),
                                scope:this
                            },
                            {
                                text : "销售订单",
                                handler:this.addClientRelateInfo("OrdersPanel","crm/OrdersPanel.js"),
                                scope:this
                            }, {
                                text : "销售合同",
                                handler:this.addClientRelateInfo("ClientContractPanel","crm/ClientContractPanel.js"),
                                scope:this
                            }, {
                                text : "销售退货单",
                                handler:this.addClientRelateInfo("OrdersBackPanel","crm/OrdersBackPanel.js"),
                                scope:this
                            },
                            "-",
                            {
                                text : "回款记录",
                                handler:this.addClientRelateInfo("ClientIncomePanel","crm/ClientIncomePanel.js"),
                                scope:this
                            }, {
                                text : "回款计划",
                                handler:this.addClientRelateInfo("ClientIncomePlanPanel","crm/ClientIncomePlanPanel.js"),
                                scope:this
                            }, {
                                text : "费用记录",
                                handler:this.addClientRelateInfo("ClientPayoutPanel","crm/ClientPayoutPanel.js"),
                                scope:this
                            }, {
                                text : "开票记录",
                                handler:this.addClientRelateInfo("InvoiceItemPanel","crm/InvoiceItemPanel.js"),
                                scope:this
                            },
                            "-",
                            {
                                text : "客服记录",
                                handler:this.addClientRelateInfo("CustomerServicePanel","crm/CustomerServicePanel.js"),
                                scope:this
                            }, {
                                text : "客户投",
                                handler:this.addClientRelateInfo("ClientLodgePanel","crm/ClientLodgePanel.js"),
                                scope:this
                            }
                            ]
				})
		this.menu.insert(0, new Ext.menu.Item(this.btn_relative));
		this.btn_hotSet = new Ext.Button({
					id : "btn_hotSet",
					cls : "x-btn-text-icon",
					iconCls : "upload-icon",
					text : "热点设置",
					handler : this.hotSet,
					scope : this
				})
		this.menu.insert(4, new Ext.menu.Item(this.btn_hotSet));
		this.grid.on("render", function() {
					var bc = {
						iconCls : 'search',
						scope : this,
						enableToggle : true
					};
					this.grid.getTopToolbar().insert(
							10,
							[this.btn_relative, this.btn_hotSet,
									this.btn_types, this.btn_hot,
									this.btn_visitDays, this.btn_updateDays]);
				}, this);
		ClientPanel.superclass.afterList.call(this);
	}
});