﻿//------------------------------------------------------------------------------
//----- NavigationReportModalController ----------------------------------------
//------------------------------------------------------------------------------

//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+

// copyright:   2016 WiM - USGS

//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//             
// 
//   purpose:  Example of Modal Controller
//          
//discussion:


//Comments
//05.11.2016 jkn - Created

//Import

module StreamStats.Controllers {
    'use string';
    interface INavigationReportModalControllerScope extends ng.IScope {
        vm: INavigationReportModalController;
    }
    interface IModal {
        Close(): void
    }
    interface INavigationReportModalController extends IModal {
    }
    class NavigationReportModalController implements INavigationReportModalController {
        //Properties
        //-+-+-+-+-+-+-+-+-+-+-+-
        private modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        public sce: any;
        public pagecontent: any;
        //Constructor
        //-+-+-+-+-+-+-+-+-+-+-+-
        static $inject = ['$scope', '$sce', '$modalInstance','StreamStats.Services.ModalService'];
        constructor($scope: INavigationReportModalControllerScope,$sce: any, modal: ng.ui.bootstrap.IModalServiceInstance, modalservice:Services.IModalService) {
            $scope.vm = this;
            this.sce = $sce;
            this.modalInstance = modal;
            this.pagecontent = modalservice.modalOptions.placeholder;

        }  
        
        //Methods  
        //-+-+-+-+-+-+-+-+-+-+-+-

        public Close(): void {
            this.modalInstance.dismiss('cancel')
        }

        public convertUnsafe(x: string) {
            console.log('converting...');
            return this.sce.trustAsHtml(x);
        }

        public replaceAll(str, find, replace) {
            return str.replace(new RegExp(find, 'g'), replace);
        }

        public getOldGWWpage() {

            this.pagecontent = '';

            //this.Execute(request).then(
            //    (response: any) => {
            //        this.siteLoaded = true;

            //        if (response.data.indexOf('dws_maps') > 0) {
            //            //hide header
            //            var replaced = response.data.replace('<table border="0" cellpadding="3" cellspacing="0" width="950px">', '<table border="0" cellpadding="3" cellspacing="0" width="950px" style="display:none;">')

            //            //hide footer
            //            replaced = replaced.replace('<div id="usgsfooter">', '<div id="usgsfooter" style="display:none;">');

            //            //change relative URLs
            //            replaced = this.replaceAll(replaced, 'iframe', 'div')
            //            replaced = this.replaceAll(replaced, '<td valign="top" width="550">', '<td valign="top" width="550" style="display:none;">')
            //            replaced = this.replaceAll(replaced, 'src="../', 'src="https://groundwaterwatch.usgs.gov/')
            //            replaced = this.replaceAll(replaced, 'src="images/', 'src="https://groundwaterwatch.usgs.gov/images/')
            //            replaced = this.replaceAll(replaced, 'src="../images/', 'src="https://groundwaterwatch.usgs.gov/images/')
            //            replaced = this.replaceAll(replaced, 'src="BandPlots-small/', 'src="https://groundwaterwatch.usgs.gov/BandPlots-small/')
            //            replaced = this.replaceAll(replaced, 'src="DVPlotsSmall/', 'src="https://groundwaterwatch.usgs.gov/DVPlotsSmall/')
            //            replaced = this.replaceAll(replaced, 'src="wlplotssmall/', 'src="https://groundwaterwatch.usgs.gov/wlplotssmall/')
            //            replaced = this.replaceAll(replaced, 'src="plots-prsmall/', 'src="https://groundwaterwatch.usgs.gov/plots-prsmall/')

            //            replaced = this.replaceAll(replaced, 'color="red"', 'color="black"')
            //            this.pagecontent = replaced;
            //        }
            //        else {
            //            console.log('No page found for this site')
            //            this.pagecontent = '<div class="alert alert-warning" role="alert">No page found for this site: ' + this.gwwServices.SelectedGWSite['properties']['SITE_NO'] + '<a href = "https://groundwaterwatch.usgs.gov/AWLSites.asp?mt=g&S=' + this.gwwServices.SelectedGWSite['properties']['SITE_NO'] + '&ncd=awl" target="_blank"> GWW Page link </a></div>';
            //        }
            //    }, (error) => {
            //        console.log('No gww sites found');
            //    }).finally(() => {
            //    });

        }
        
        //Helper Methods
        //-+-+-+-+-+-+-+-+-+-+-+-

    }//end  class

    angular.module('StreamStats.Controllers')
        .controller('StreamStats.Controllers.NavigationReportModalController', NavigationReportModalController);
}//end module 