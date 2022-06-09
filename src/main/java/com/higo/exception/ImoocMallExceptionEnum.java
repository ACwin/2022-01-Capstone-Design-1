package com.higo.exception;

/**
 * 描述：     异常枚举
 */
public enum ImoocMallExceptionEnum {
    NEED_USER_NAME(10001, "user name cannot be empty"),
    NEED_PASSWORD(10002, "password cannot be empty"),
    PASSWORD_TOO_SHORT(10003, "password length cannot be less than 8 bits"),
    NAME_EXISTED(10004, "Duplicate names are not allowed"),
    INSERT_FAILED(10005, "The insertion failed, please try again"),
    WRONG_PASSWORD(10006, "Wrong password"),
    NEED_LOGIN(10007, "The user is not logged on"),
    UPDATE_FAILED(10008, "Update failed"),
    NEED_ADMIN(10009, "No administrator privileges"),
    PARA_NOT_NULL(10010, "Parameters cannot be empty"),
    CREATE_FAILED(10011, "New failed"),
    REQUEST_PARAM_ERROR(10012, "Parameter error"),
    DELETE_FAILED(10013, "Delete failed"),
    MKDIR_FAILED(10014, "Folder creation failed"),
    UPLOAD_FAILED(10015, "Image upload failed"),
    NOT_SALE(10016, "Item status is not available for sale"),
    NOT_ENOUGH(10017, "Insufficient inventory of goods"),
    CART_EMPTY(10018, "Items that have been checked in the shopping cart are empty"),
    NO_ENUM(10019, "The corresponding enumeration was not found"),
    NO_ORDER(10020, "The order does not exist"),
    NOT_YOUR_ORDER(10021, "Not your order"),
    WRONG_ORDER_STATUS(10022, "The order status is not compliant"),
    SYSTEM_ERROR(20000, "System exception, please view the specific error message from the console or log");
    /**
     * 异常码
     */
    Integer code;
    /**
     * 异常信息
     */
    String msg;

    ImoocMallExceptionEnum(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}


