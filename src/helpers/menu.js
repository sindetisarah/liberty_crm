export const dashboardMenu = {
    dashboard: {
        id: 'dashboard',
        text: 'Dashboard',
        path: '/dashboard',
        icon: 'Dashboard',
        subMenu: null,
        isBeta: false,
        isProd: true
    },
    fleet: {
        id: 'fleet',
        text: 'Fleet',
        path: '/dashboard/fleet',
        icon: 'emoji_transportation',
        subMenu: null,
        isBeta: false,
        isProd: true
    },
    
    sacco: {
        id: 'sacco',
        text: 'Sacco',
        path: '/dashboard/sacco',
        icon: 'FolderShared',
        isBeta: true,
        isProd: false
    },
    
    logout: {
        id: 'logout',
        text: 'Logout',
        path: '/logout',
        icon: 'Logout',
        subMenu: null,
        isBeta: false,
        isProd: true
    },
};

export const detailMenu = {
    conversations: {
        id: 'conversations',
        text: 'My Conversations',
        path: '/dashboard/fleet/conversations',
        icon: 'emoji_transportation'
    },

    saccodetail: {
        id: 'details',
        text: 'My Sacco Details',
        path: '/dashboard/sacco/details',
        icon: 'emoji_transportation'
    },
}

export const authMenu = {
    login: {
        id: 'login',
        text: 'Login',
        path: "/",
        icon: 'Extension',
    },

    otp: {
        id: 'otp',
        text: 'OTP',
        path: "/otp",
        icon: 'Extension',
    },
}

export const ticketsHeaders = [{
    name: "Ticket ID"
}, {
    name: "Reason"
}, {
    name: "Description"
}, {
    name: "Status"
}, {
    name: "Date Created"
}, {
    name: "Date Modified"
}]

export const referralsHeaders = [{
    name: "Referral ID"
}, {
    name: "Name"
}, {
    name: "Phone Number"
}, {
    name: "Location"
}, {
    name: "Product Interested"
}, {
    name: "Status"
}, {
    name: "Date Created"
}]

export const paymentHeaders = [{
    name: "Payment Type"
}, {
    name: "Amount"
}, {
    name: "Payment Reference"
}, {
    name: "Date"
}]