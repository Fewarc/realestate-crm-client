import { CalendarIcon, ClipboardListIcon, CogIcon, PresentationChartLineIcon, UserCircleIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Switch, useHistory } from "react-router";
import { Route } from "react-router-dom";
import AccountAgency from "../components/AccountAgency";
import AccountClendar from "../components/AccountCalendar";
import AccountClients from "../components/AccountClients";
import AccountInfo from "../components/AccountInfo";
import AccountNotes from "../components/AccountNotes";
import AccountContacts from "../components/AccountsContacts";
import AccountSettings from "../components/AccountSettings";
import Button from "../components/Button";
import Container from "../components/Container";
import Config from "../constants/Config";
import { getUserNavbarData, getUserRole } from "../selectors/UserSelector";

interface UserData {
  userId: string | undefined,
  username: string
}

const menuIconClass = classNames(
  'w-6 h-6',
  'mr-2'
);

const AccountPage: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { userId, username } = useSelector<UserData, UserData>(state => getUserNavbarData(state));
  const userRole = useSelector<string, string>(state => getUserRole(state)).toUpperCase();

  return (
    <div className='w-full h-full flex'>
      <div className='flex flex-col py-48 px-12 shadow-md text-primary text-xl gap-y-4'>
        <Button 
          type='transparent'
          onClick={() => history.push('/account')}
          children={
            <div className='flex items-center'>
              <UserCircleIcon className={menuIconClass}/>
              {t('account.menu.account')}
            </div>
          }
        />
        <Button 
          type='transparent'
          onClick={() => history.push('/account/settings')}
          children={
            <div className='flex items-center'>
              <CogIcon className={menuIconClass}/>
              {t('account.menu.settings')}
            </div>
          }
        />
        <Button 
          type='transparent'
          onClick={() => history.push('/account/calendar')}
          children={
            <div className='flex items-center'>
              <CalendarIcon className={menuIconClass}/>
              {t('account.menu.calendar')}
            </div>
          }
        />
        <Button 
          type='transparent'
          onClick={() => history.push('/account/contacts')}
          children={
            <div className='flex items-center'>
              <UsersIcon className={menuIconClass}/>
              {t('account.menu.contacts')}
            </div>
          }
        />
        <Button 
          type='transparent'
          onClick={() => history.push('/account/notes')}
          children={
            <div className='flex items-center'>
              <ClipboardListIcon className={menuIconClass}/>
              {t('account.menu.notes')}
            </div>
          }
        />
        {userRole === Config.ROLE_AGENT && 
          <Button 
            type='transparent'
            onClick={() => history.push('/account/clients')}
            children={
              <div className='flex items-center'>
                <UserGroupIcon className={menuIconClass}/>
                {t('account.menu.clients')}
              </div>
            }
          />
        }
        {userRole === Config.ROLE_AGENCY && 
          <Button 
            type='transparent'
            onClick={() => history.push('/account/agency')}
            children={
              <div className='flex items-center'>
                <PresentationChartLineIcon className={menuIconClass}/>
                {t('account.menu.agency')}
              </div>
            }
          />
        }
      </div>
      <Container className='flex-grow max-w-9xl'>
          <Switch>
            <Route path='/account/calendar' render={() => <AccountClendar userId={parseInt(userId as string)}/>}/>
            <Route path='/account/contacts' render={() => <AccountContacts userId={parseInt(userId as string)} username={username}/>}/>
            <Route path='/account/notes' render={() => <AccountNotes userId={parseInt(userId as string)} username={username}/>}/>
            <Route exact path='/account' render={() => <AccountInfo />}/>
            <Route exact path='/account/settings' render={() => <AccountSettings />}/>
            <Route exact path='/account/clients' render={() => <AccountClients />}/>
            <Route exact path='/account/agency' render={() => <AccountAgency />}/>
          </Switch>
      </Container>
    </div>
  );
}

export default AccountPage;