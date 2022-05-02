package co.com.reportstools.dto;

public class GetTokenResponse {
	Boolean success;
	Integer statusCode;
	String message;
	AdLoginResponse data;
	String innerException;

	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	public Integer getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public AdLoginResponse getData() {
		return data;
	}

	public void setData(AdLoginResponse data) {
		this.data = data;
	}

	public String getInnerException() {
		return innerException;
	}

	public void setInnerException(String innerException) {
		this.innerException = innerException;
	}

}
