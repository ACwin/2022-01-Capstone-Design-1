package com.higo.service;

import com.higo.exception.ImoocMallException;
import com.higo.model.pojo.User;
import com.higo.model.vo.CartVO;
import java.util.List;

/**
 * 描述：     购物车Service
 */
public interface CartService {

    List<CartVO> list(Integer userId);

    List<CartVO> add(Integer userId, Integer productId, Integer count);

    List<CartVO> update(Integer userId, Integer productId, Integer count);

    List<CartVO> delete(Integer userId, Integer productId);

    List<CartVO> selectOrNot(Integer userId, Integer productId, Integer selected);

    List<CartVO> selectAllOrNot(Integer userId, Integer selected);
}
