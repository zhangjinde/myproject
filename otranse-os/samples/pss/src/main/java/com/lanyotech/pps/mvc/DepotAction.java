package com.lanyotech.pps.mvc;

import com.lanyotech.pps.domain.Depot;
import com.lanyotech.pps.service.IDepotService;

import cn.disco.container.annonation.Action;
import cn.disco.container.annonation.Inject;
import cn.disco.core.support.query.QueryObject;
import cn.disco.util.CommUtil;
import cn.disco.web.Module;
import cn.disco.web.Page;
import cn.disco.web.WebForm;
import cn.disco.web.core.AbstractPageCmdAction;
import cn.disco.web.tools.IPageList;


/**
 * DepotAction
 * @author Disco Framework
 */
@Action
public class DepotAction extends AbstractPageCmdAction {
	
	@Inject
	private IDepotService service;
	/*
	 * set the current service
	 * return service
	 */
	public void setService(IDepotService service) {
		this.service = service;
	}
	
	public Page doIndex(WebForm f, Module m) {
		return page("list");
	}

	public Page doList(WebForm form) {
		QueryObject qo = form.toPo(QueryObject.class);
		IPageList pageList = service.getDepotBy(qo);
		form.jsonResult(pageList);
		return Page.JSONPage;
	}

	public Page doRemove(WebForm form) {
		Long id = new Long(CommUtil.null2String(form.get("id")));
		service.delDepot(id);
		return pageForExtForm(form);
	}

	public Page doSave(WebForm form) {
		Depot object = form.toPo(Depot.class);
		if (!hasErrors())
			service.addDepot(object);
		return pageForExtForm(form);
	}
	
	public Page doUpdate(WebForm form) {
		Long id = new Long(CommUtil.null2String(form.get("id")));
		Depot object = service.getDepot(id);
		form.toPo(object, true);
		if (!hasErrors())
			service.updateDepot(id, object);
		return pageForExtForm(form);
	}
}