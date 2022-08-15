import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {

  @ViewChild('sidenav') sidenav: MatSidenav;
  public isShowSidebar: boolean;
  // public isShowSidebar: boolean = false;
  public mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  config = {
    paddingAtStart: true,
    fontColor: 'white',
    // selectedListFontColor: '#fee24f',
    selectedListFontColor: 'white',
  };

  appitems = [];

  role = 'NoAutorizado';

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.role = localStorage.getItem('role');
    console.log('this.role', this.role);
    this.appitems = [];
    this.appitems = [
      {
        label: 'Herramientas',
        items: [
          {
            label: 'Entregas',
            link: '/tablas/entregas',
          },
          {
            label: 'Escrituracion',
            link: '/tablas/escrituracion',
          },
          {
            label: 'Legalización',
            link: '/tablas/legalizacion',
          },
          {
            label: 'Renovación',
            link: '/tablas/renovaciones',
          }, {
            label: 'Seguimiento de subsidio',
            link: '/tablas/segumientos-subsidio',
          }, {
            label: 'Promesas',
            link: '/tablas/promesas',
          }, {
            label: 'Desembolso',
            link: '/tablas/desembolsos',
          }, {
            label: 'Ordenes',
            link: '/tablas/ordenes',
          }, {
            label: 'Subsidio',
            link: '/tablas/subsidios',
          }, {
            label: 'Recaudos',
            link: '/tablas/recaudos',
          }, {
            label: 'Trazabilidad',
            link: '/tablas/trazabilidad',
          }
        ]
      },
      {
        label: 'Reportes',
        items: [
          {
            label: 'Escrituración y Entregas',
            link: '/reporte/5',
          },
          {
            label: 'Ordenes',
            link: '/reporte/4',
          },
          {
            label: 'Promesas',
            link: '/reporte/7',
          },
          {
            label: 'Recaudo',
            link: '/reporte/6',
          },
          {
            label: 'Renovación y subsidio',
            link: '/reporte/1',
          },
          {
            label: 'Trazabilidad',
            link: '/reporte/2',
          },
          // {
          //   label: 'Seguimiento a Bancos',
          //   link: '/reporte/3',
          // },
        ]
      }
    ];

    if (this.role == 'Administrador') {
      this.appitems.push({
        label: 'Configuracion',
        items: [
          {
            label: 'Seleccion Proyectos',
            link: '/configuracion-proyectos',
          },
          {
            label: 'Roles de Usuario',
            link: '/configuracion-roles',
          },
          {
            label: 'Carga Datos',
            link: '/carga-informacion',
          },
          {
            label: 'Auditoria',
            link: '/auditoria',
          }
        ]
      });
    }


    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

    // this.isShowSidebar = !this.mobileQuery.matches;
  }

  ngafterviewinit() {
    this.sidenav.close();
  }

  public toggleAction(): void {
    if (this.sidenav.opened) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }


  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);

    this.sidenav.close();
  }

  selectedItem($evt) {

  }
}
