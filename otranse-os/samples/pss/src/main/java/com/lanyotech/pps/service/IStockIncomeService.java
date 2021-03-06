package com.lanyotech.pps.service;

import java.io.Serializable;
import java.util.List;
import cn.disco.web.tools.IPageList;
import cn.disco.core.support.query.IQueryObject;
import com.lanyotech.pps.domain.StockIncome;
/**
 * StockIncomeService
 * @author Disco Framework
 */
public interface IStockIncomeService {
	/**
	 * 保存一个StockIncome，如果保存成功返回该对象的id，否则返回null
	 * 
	 * @param instance
	 * @return 保存成功的对象的Id
	 */
	Long addStockIncome(StockIncome instance);
	
	/**
	 * 根据一个ID得到StockIncome
	 * 
	 * @param id
	 * @return
	 */
	StockIncome getStockIncome(Long id);
	
	/**
	 * 删除一个StockIncome
	 * @param id
	 * @return
	 */
	boolean delStockIncome(Long id);
	
	/**
	 * 批量删除StockIncome
	 * @param ids
	 * @return
	 */
	boolean batchDelStockIncomes(List<Serializable> ids);
	
	/**
	 * 通过一个查询对象得到StockIncome
	 * 
	 * @param properties
	 * @return
	 */
	IPageList getStockIncomeBy(IQueryObject queryObject);
	
	/**
	  * 更新一个StockIncome
	  * @param id 需要更新的StockIncome的id
	  * @param dir 需要更新的StockIncome
	  */
	boolean updateStockIncome(Long id,StockIncome instance);
	
	/**
	 * 删除入库单明细项目
	 * @param id
	 * @return
	 */
	boolean delStockIncomeItem(Long id);
	
}
