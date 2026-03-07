import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useView } from '@/context/ViewContext';
import { ProfileProvider } from '../../Shared/ProfileContext';
import SharedDashboardLayout from '../../Shared/DashboardLayout';
import { profileData, membersData, tasksData, messagesData, notificationsData } from './mockData';

const MemberPanel = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const { setCurrentView } = useView();

    // useEffect(() => {
    //     setCurrentView('se-dashboard');
    //     localStorage.setItem('se_dashboard_active', 'true');
    // }, [setCurrentView]);
    const selectedClub = location.state?.club;

    const clubs = selectedClub
        ? [{ id: selectedClub.abbr, name: selectedClub.name, abbr: selectedClub.abbr, logo: selectedClub.img, role: 'Member' }]
        : profileData.clubs;

    const initialData = {
        profile: { ...profileData, clubs },
        members: membersData,
        tasks: tasksData,
        messages: messagesData,
        notifications: notificationsData
    };

    return (
        <ProfileProvider initialData={initialData} role="Member">
            <SharedDashboardLayout />
        </ProfileProvider>
    );
};

export default MemberPanel;
