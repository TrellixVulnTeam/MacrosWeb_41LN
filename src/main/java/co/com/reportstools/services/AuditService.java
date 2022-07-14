package co.com.reportstools.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.reportstools.repositories.AuditRepository;

@Service
public class AuditService {

	@Autowired
	private AuditRepository auditRepository;

	public String getAudit(String startTime, String endTime, String herramienta, String usuario) {
		return auditRepository.getAudit(startTime, endTime, herramienta, usuario);
	}

}
