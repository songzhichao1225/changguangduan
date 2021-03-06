import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom';
// import loginPh from './phone/loginPh/loginPh';
// import loginPhTeo from './phone/loginPhTeo/loginPhTeo';
// import corporatePh from './phone/corporatePh/corporatePh';
// import registerPh from './phone/registerPh/registerPh';
// import stadiumInformationPh from './phone/stadiumInformationPh/stadiumInformationPh';
// import mapPh from './phone/mapPh/mapPh';
// import qualificationPh from './phone/qualificationPh/qualificationPh';
// import idCardPh from './phone/idCardPh/idCardPh';
// import resultsAuditsPh from './phone/resultsAuditsPh/resultsAuditsPh';
// import forgetPasswordPh from './phone/forgetPasswordPh/forgetPasswordPh';
// import monthlyIncomePh from './phone/monthlyIncomePh/monthlyIncomePh';
// import moneyDetailPh from './phone/moneyDetailPh/moneyDetailPh';
// import commentPh from './phone/commentPh/commentPh';
// import myWalletPh from './phone/myWalletPh/myWalletPh';
// import management from './phone/management/management';
// import withdrawalPh from './phone/withdrawalPh/withdrawalPh';
// import walletDetailsPh from './phone/walletDetailsPh/walletDetailsPh';
// import recordPh from './phone/recordPh/recordPh';
// import sittingPh from './phone/sittingPh/sittingPh';
// import temporaryPh from './phone/temporaryPh/temporaryPh';
// import untiePhonePh from './phone/untiePhonePh/untiePhonePh';
// import commandPh from './phone/commandPh/commandPh';
// import resetPasswordPh from './phone/resetPasswordPh/resetPasswordPh';
// import inforSitePh from './phone/inforSitePh/inforSitePh';
// import Agreement from './phone/Agreement/Agreement';
import phone from './phone/phone/phone';
// import homePagePh from './phone/homePagePh/homePagePh';
// import Membership from './phone/Membership/Membership';
// import MembershipList from './phone/MembershipList/MembershipList';
// import advertisingPh from './phone/advertisingPh/advertisingPh';
import lazyLoad from './lazyLoad';
const appOrder = lazyLoad(() => import('./phone/appOrder/appOrder'));
const bindingsWx = lazyLoad(() => import('./phone/bindingsWx/bindingsWx'));
const aboutNews = lazyLoad(() => import('./phone/aboutNews/aboutNews'));
const loginPh = lazyLoad(() => import('./phone/loginPh/loginPh'));
const loginPhTeo = lazyLoad(() => import('./phone/loginPhTeo/loginPhTeo'));
const corporatePh = lazyLoad(() => import('./phone/corporatePh/corporatePh'));
const registerPh = lazyLoad(() => import('./phone/registerPh/registerPh'));
const stadiumInformationPh = lazyLoad(() => import('./phone/stadiumInformationPh/stadiumInformationPh'));
const mapPh = lazyLoad(() => import('./phone/mapPh/mapPh'));
const qualificationPh = lazyLoad(() => import('./phone/qualificationPh/qualificationPh'));
const idCardPh = lazyLoad(() => import('./phone/idCardPh/idCardPh'));
const resultsAuditsPh = lazyLoad(() => import('./phone/resultsAuditsPh/resultsAuditsPh'));
const forgetPasswordPh = lazyLoad(() => import('./phone/forgetPasswordPh/forgetPasswordPh'));
const monthlyIncomePh = lazyLoad(() => import('./phone/monthlyIncomePh/monthlyIncomePh'));
const moneyDetailPh = lazyLoad(() => import('./phone/moneyDetailPh/moneyDetailPh'));
const commentPh = lazyLoad(() => import('./phone/commentPh/commentPh'));
const myWalletPh = lazyLoad(() => import('./phone/myWalletPh/myWalletPh'));
const management = lazyLoad(() => import('./phone/management/management'));
const withdrawalPh = lazyLoad(() => import('./phone/withdrawalPh/withdrawalPh'));
const walletDetailsPh = lazyLoad(() => import('./phone/walletDetailsPh/walletDetailsPh'));
const recordPh = lazyLoad(() => import('./phone/recordPh/recordPh'));
const sittingPh = lazyLoad(() => import('./phone/sittingPh/sittingPh'));
const temporaryPh = lazyLoad(() => import('./phone/temporaryPh/temporaryPh'));
const untiePhonePh = lazyLoad(() => import('./phone/untiePhonePh/untiePhonePh'));
const commandPh = lazyLoad(() => import('./phone/commandPh/commandPh'));
const resetPasswordPh = lazyLoad(() => import('./phone/resetPasswordPh/resetPasswordPh'));
const inforSitePh = lazyLoad(() => import('./phone/inforSitePh/inforSitePh'));
const Agreement = lazyLoad(() => import('./phone/Agreement/Agreement'));
// const phone = lazyLoad(() => import('./phone/phone/phone'));
const homePagePh = lazyLoad(() => import('./phone/homePagePh/homePagePh'));
const Membership = lazyLoad(() => import('./phone/Membership/Membership'));
const MembershipList = lazyLoad(() => import('./phone/MembershipList/MembershipList'));
const advertisingPh = lazyLoad(() => import('./phone/advertisingPh/advertisingPh'));


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={loginPh}/>
            <Route exact path="/login" component={loginPhTeo}/>
            <Route exact path="/corporateLogin" component={corporatePh}/>
            <Route exact path="/registerPh" component={registerPh}/>
            <Route exact path="/stadiumInformationPh" component={stadiumInformationPh}/>
            <Route exact path="/mapPh" component={mapPh}/>
            <Route exact path="/qualificationPh" component={qualificationPh}/>
            <Route exact path="/idCardPh" component={idCardPh}/>
            <Route exact path="/resultsAuditsPh" component={resultsAuditsPh}/>
            <Route exact path="/forgetPasswordPh" component={forgetPasswordPh}/>
            <Route exact path="/homePh/monthlyIncomePh" component={monthlyIncomePh}/>
            <Route exact path="/homePh/monthlyIncomePh/moneyDetailPh" component={moneyDetailPh}/>
            <Route exact path="/homePh/commentPh" component={commentPh}/>
            <Route exact path="/homePh/myWalletPh" component={myWalletPh}/>
            <Route exact path="/homePh/management" component={management}/>
            <Route exact path="/homePh/withdrawalPh" component={withdrawalPh}/>
            <Route exact path="/homePh/walletDetailsPh" component={walletDetailsPh}/>
            <Route exact path="/homePh/recordPh" component={recordPh}/>
            <Route exact path="/homePh/sittingPh" component={sittingPh}/>
            <Route exact path="/homePh/temporaryPh" component={temporaryPh}/>
            <Route exact path="/homePh/untiePhonePh" component={untiePhonePh}/>
            <Route exact path="/homePh/commandPh" component={commandPh}/>
            <Route exact path="/homePh/resetPasswordPh" component={resetPasswordPh}/>
            <Route exact path="/homePh/inforSitePh" component={inforSitePh}/>
            <Route exact path="/homePh/advertisingPh" component={advertisingPh}/>
            <Route  path="/homePh" component={homePagePh}/>
            <Route exact path="/appOrder" component={appOrder}/>
            <Route exact path="/bindingsWx" component={bindingsWx}/>
            <Route exact path="/aboutNews" component={aboutNews}/>
            <Route exact path="/phone" component={phone}/>
            <Route exact path="/Agreement" component={Agreement}/>
            <Route exact path="/Membership" component={Membership}/>
            <Route exact path="/MembershipList" component={MembershipList}/>
            
           
        </Switch>
    </HashRouter>
);




export default BasicRoute;