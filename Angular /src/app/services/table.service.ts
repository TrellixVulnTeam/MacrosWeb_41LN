import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AppHttpResponse, TrackHttpError } from "../interfaces/app-http-response.interface";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TableService {

  constructor(private http: HttpClient) { }



  getDataTable(obrasSelected: any, page: any, size: any, sortFilter?: any, dataFilter?: any, reportType?: number): Observable<AppHttpResponse<any> | TrackHttpError> {

    var url = `http://192.168.20.52:8090/api/legalizacion`;
    let params = new HttpParams();


    let sortFilterTemp: any = null;
    if (sortFilter != null && sortFilter != '' && sortFilter != 'null') {
      sortFilterTemp = sortFilter;
    }

    let dataFilterTemp: any = null;
    if (dataFilter != null && dataFilter != '' && dataFilter != 'null') {
      dataFilterTemp = dataFilter;
    }


    return this.http
      .post<null>(url, { proyecto: obrasSelected, page: page, size: size, sortFilter: sortFilterTemp, dataFilter: dataFilterTemp, reportType: reportType })
      .pipe(map((data: any) => {
        data.data = JSON.parse(data.data);
        return data;
      }
      ), catchError((error) => this.handleHttpError(error)));
  }

  getHeaderOptionsTable(obrasSelected: any, dataGroup: any, dataFilter?: any, reportType?: number): Observable<AppHttpResponse<any> | TrackHttpError> {

    var url = `http://192.168.20.52:8090/api/legalizacion/filter`;

    return this.http
      .post<null>(url, { proyecto: obrasSelected, dataGroup: dataGroup, dataFilter: dataFilter, reportType: reportType })
      .pipe(catchError((error) => this.handleHttpError(error)));
  }

  getHeaderOptionFilterList(obrasSelected: any, dataGroup: any, dataFilter?: any, filterLike?: any, reportType?: number): Observable<AppHttpResponse<any> | TrackHttpError> {

    var url = `http://192.168.20.52:8090/api/legalizacion/filter/like`;

    return this.http
      .post<null>(url, { proyecto: obrasSelected, dataGroup: dataGroup, dataFilter: dataFilter, filterLike: filterLike, reportType: reportType })
      .pipe(catchError((error) => this.handleHttpError(error)));
  }


  updateData(data: any, reportType: number, auditList: []): Observable<AppHttpResponse<any> | TrackHttpError> {
    var url = `http://192.168.20.52:8090/api/legalizacion/save`;

    return this.http
      .post<null>(url, { data: data, reportType: reportType, auditList: auditList })
      .pipe(catchError((error) => this.handleHttpError(error)));
  }

  multipleUpdateLegalizacion(field: string, newValue: string, obras: string, sortFilter: string, dataFilter: string, reportType?: number): Observable<AppHttpResponse<any> | TrackHttpError> {
    var url = `http://192.168.20.52:8090/api/legalizacion/multisave`;

    let request: any = {
      field: field,
      newValue: newValue,
      obras: obras,
      sortFilter: sortFilter,
      dataFilter: dataFilter,
      reportType: reportType
    };
    console.log(request);

    return this.http
      .post<null>(url, request)
      .pipe(catchError((error) => this.handleHttpError(error)));
  }

  getOptionListModal(herramienta: string, campo: string): Observable<AppHttpResponse<any> | TrackHttpError> {
    var url = `http://192.168.20.52:8090/api/get-option-list-modal`;

    let request: any = {
      herramienta: herramienta,
      campo: campo
    };
    console.log(request);

    return this.http
      .post<null>(url, request)
      .pipe(catchError((error) => this.handleHttpError(error)));
  }


  getProjectSettings(): Observable<AppHttpResponse<any> | TrackHttpError> {
    var url = `http://192.168.20.52:8090/api/project-settings`;
    return this.http
      .get<any>(url)
      .pipe(map((data: any) => {
        // data.data = JSON.parse(data.data);
        return data;
      }
      ), catchError((error) => this.handleHttpError(error)));
  }

  updateProject(PRY_Id: String, PRY_Nombre: String, opt: number): Observable<AppHttpResponse<any> | TrackHttpError> {

    let request: any = {
      PRY_Id: PRY_Id,
      PRY_Nombre: PRY_Nombre,
      opt: opt
    };
    console.log(request);

    var url = `http://192.168.20.52:8090/api/update-project`;
    return this.http
      .post<null>(url, request).pipe(map((data: any) => {
        // data.data = JSON.parse(data.data);
        return data;
      }
      ), catchError((error) => this.handleHttpError(error)));
  }

  login(user, password): Observable<AppHttpResponse<any> | TrackHttpError> {

    let request: any = {
      user: user,
      password: password
    };
    console.log(request);

    var url = `http://192.168.20.52:8090/api/login`;
    return this.http
      .post<null>(url, request).pipe(map((data: any) => {
        return data;
      }
      ), catchError((error) => this.handleHttpError(error)));
  }

  getUsers(): Observable<AppHttpResponse<any> | TrackHttpError> {
    var url = `http://192.168.20.52:8090/api/users`;
    return this.http
      .post<any>(url, {})
      .pipe(map((data: any) => {
        // data.data = JSON.parse(data.data);
        return data;
      }
      ), catchError((error) => this.handleHttpError(error)));
  }

  getRoles(): Observable<AppHttpResponse<any> | TrackHttpError> {
    var url = `http://192.168.20.52:8090/api/roles`;
    return this.http
      .post<any>(url, {})
      .pipe(map((data: any) => {
        // data.data = JSON.parse(data.data);
        return data;
      }
      ), catchError((error) => this.handleHttpError(error)));
  }

  addOrUpdateRole(userId: String, roleId: String, opt: number): Observable<AppHttpResponse<any> | TrackHttpError> {

    let request: any = {
      userId: userId,
      roleId: roleId,
      opt: opt
    };
    console.log(request);

    var url = `http://192.168.20.52:8090/api/update-role`;
    return this.http
      .post<null>(url, request).pipe(map((data: any) => {
        // data.data = JSON.parse(data.data);
        return data;
      }
      ), catchError((error) => this.handleHttpError(error)));
  }

  loadData(data: any, reportType: string): Observable<AppHttpResponse<any> | TrackHttpError> {
    var url = `http://192.168.20.52:8090/api/load-data`;

    let request: any = {
      reportType: reportType,
      data: data
    };
    console.log(request);

    return this.http
      .post<null>(url, request)
      .pipe(catchError((error) => this.handleHttpError(error)));
  }

  getAudit(startTime: any, endTime: any): Observable<AppHttpResponse<any> | TrackHttpError> {
    var url = `http://192.168.20.52:8090/api/audit`;

    return this.http
      .post<null>(url, { startTime: startTime, endTime: endTime })
      .pipe(catchError((error) => this.handleHttpError(error)));
  }

  private handleHttpError(
    error: HttpErrorResponse
  ): Observable<TrackHttpError> {
    console.log("ERROR => ", error);
    let dataError = new TrackHttpError();
    dataError.friendlyMessage = "Un error a ocurrido obteniendo los datos.";
    return throwError(dataError);
  }



}
