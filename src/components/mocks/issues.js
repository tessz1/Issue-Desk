export const issuesMock = [
    {
        id: 1,
        title: 'Login page submit button not responding',
        description: 'Clicking the submit button on the login page does not trigger form submission.',
        status: 'OPEN',
        priority: 'HIGH',
        createdAt: '2026-05-14',
        updatedAt: '2026-05-15'
    },
    {
        id: 2,
        title: 'Profile avatar upload fails',
        description: 'Uploading images larger than 2 MB causes a server error response.',
        status: 'IN_PROGRESS',
        priority: 'MEDIUM',
        createdAt: '2026-05-13',
        updatedAt: '2026-05-15'
    },
    {
        id: 3,
        title: 'Infinite scroll duplicates feed items',
        description: 'Reaching the bottom of the feed reloads the same set of items repeatedly.',
        status: 'OPEN',
        priority: 'HIGH',
        createdAt: '2026-05-14',
        updatedAt: '2026-05-14'
    },
    {
        id: 4,
        title: 'Dark mode preference resets',
        description: 'Theme settings return to default after refreshing the page.',
        status: 'CLOSED',
        priority: 'LOW',
        createdAt: '2026-05-10',
        updatedAt: '2026-05-12'
    },
    {
        id: 5,
        title: 'Mobile navigation overlaps content',
        description: 'Navigation dropdown covers the main content on smaller screen sizes.',
        status: 'IN_REVIEW',
        priority: 'MEDIUM',
        createdAt: '2026-05-12',
        updatedAt: '2026-05-15'
    },
    {
        id: 6,
        title: 'Notification counter incorrect',
        description: 'Unread notifications badge still displays old values after reading messages.',
        status: 'OPEN',
        priority: 'HIGH',
        createdAt: '2026-05-14',
        updatedAt: '2026-05-16'
    },
    {
        id: 7,
        title: 'Payment confirmation emails missing',
        description: 'Customers do not receive confirmation emails after successful Stripe payments.',
        status: 'BACKLOG',
        priority: 'URGENT',
        createdAt: '2026-05-09',
        updatedAt: '2026-05-11'
    },
    {
        id: 8,
        title: 'Search input loses focus while typing',
        description: 'Typing quickly into the global search field occasionally resets input focus.',
        status: 'IN_PROGRESS',
        priority: 'MEDIUM',
        createdAt: '2026-05-11',
        updatedAt: '2026-05-15'
    },
    {
        id: 9,
        title: 'Sidebar animation stutters on open',
        description: 'Opening the sidebar causes frame drops on lower-end devices.',
        status: 'OPEN',
        priority: 'LOW',
        createdAt: '2026-05-13',
        updatedAt: '2026-05-14'
    },
    {
        id: 10,
        title: 'Settings page crashes on save',
        description: 'Saving updated account settings causes the application to freeze temporarily.',
        status: 'OPEN',
        priority: 'HIGH',
        createdAt: '2026-05-12',
        updatedAt: '2026-05-15'
    },
    {
        id: 11,
        title: 'Comments section not loading',
        description: 'API request for comments returns empty data despite existing entries.',
        status: 'BACKLOG',
        priority: 'MEDIUM',
        createdAt: '2026-05-10',
        updatedAt: '2026-05-11'
    },
    {
        id: 12,
        title: 'Broken image previews in gallery',
        description: 'Some uploaded images fail to render preview thumbnails correctly.',
        status: 'IN_PROGRESS',
        priority: 'LOW',
        createdAt: '2026-05-11',
        updatedAt: '2026-05-14'
    },
    {
        id: 13,
        title: 'User session expires too early',
        description: 'Authenticated users are logged out after only a few minutes of inactivity.',
        status: 'OPEN',
        priority: 'URGENT',
        createdAt: '2026-05-15',
        updatedAt: '2026-05-16'
    },
    {
        id: 14,
        title: 'Markdown editor toolbar hidden',
        description: 'Toolbar buttons disappear on screens below 768px width.',
        status: 'CLOSED',
        priority: 'LOW',
        createdAt: '2026-05-09',
        updatedAt: '2026-05-10'
    },
    {
        id: 15,
        title: 'API rate limit warning missing',
        description: 'Users receive failed requests without any visible rate limit notification.',
        status: 'IN_REVIEW',
        priority: 'MEDIUM',
        createdAt: '2026-05-13',
        updatedAt: '2026-05-15'
    },
    {
        id: 16,
        title: 'Calendar events duplicated',
        description: 'Refreshing the calendar page duplicates recurring events visually.',
        status: 'OPEN',
        priority: 'HIGH',
        createdAt: '2026-05-14',
        updatedAt: '2026-05-15'
    },
    {
        id: 17,
        title: 'Password reset link invalid',
        description: 'Generated reset links redirect users to a 404 page.',
        status: 'BACKLOG',
        priority: 'URGENT',
        createdAt: '2026-05-12',
        updatedAt: '2026-05-13'
    },
    {
        id: 18,
        title: 'Tooltip flickers on hover',
        description: 'Hovering interactive icons causes tooltip animations to flicker repeatedly.',
        status: 'OPEN',
        priority: 'LOW',
        createdAt: '2026-05-13',
        updatedAt: '2026-05-14'
    },
    {
        id: 19,
        title: 'Dashboard charts not updating',
        description: 'Real-time analytics widgets remain static after new data arrives.',
        status: 'IN_PROGRESS',
        priority: 'HIGH',
        createdAt: '2026-05-14',
        updatedAt: '2026-05-16'
    },
    {
        id: 20,
        title: 'Export to CSV generates empty file',
        description: 'Downloaded CSV reports contain headers only without row data.',
        status: 'OPEN',
        priority: 'MEDIUM',
        createdAt: '2026-05-10',
        updatedAt: '2026-05-12'
    },
    {
        id: 21,
        title: 'Tags input allows duplicates',
        description: 'Users can add the same tag multiple times in issue forms.',
        status: 'IN_REVIEW',
        priority: 'LOW',
        createdAt: '2026-05-12',
        updatedAt: '2026-05-14'
    },
    {
        id: 22,
        title: 'Video player controls unresponsive',
        description: 'Playback controls occasionally stop responding after fullscreen mode.',
        status: 'OPEN',
        priority: 'HIGH',
        createdAt: '2026-05-13',
        updatedAt: '2026-05-15'
    },
    {
        id: 23,
        title: 'Incorrect timezone displayed',
        description: 'User profile timestamps ignore browser locale settings.',
        status: 'BACKLOG',
        priority: 'MEDIUM',
        createdAt: '2026-05-11',
        updatedAt: '2026-05-13'
    },
    {
        id: 24,
        title: 'Keyboard shortcuts stop working',
        description: 'Application hotkeys become disabled after navigating between routes.',
        status: 'OPEN',
        priority: 'HIGH',
        createdAt: '2026-05-14',
        updatedAt: '2026-05-16'
    },
    {
        id: 25,
        title: 'Duplicate toast notifications shown',
        description: 'Triggering actions quickly results in stacked duplicate toasts.',
        status: 'IN_PROGRESS',
        priority: 'LOW',
        createdAt: '2026-05-15',
        updatedAt: '2026-05-16'
    },
    {
        id: 26,
        title: 'OAuth login redirects incorrectly',
        description: 'GitHub authentication redirects users back to the login page.',
        status: 'OPEN',
        priority: 'URGENT',
        createdAt: '2026-05-12',
        updatedAt: '2026-05-15'
    },
    {
        id: 27,
        title: 'Data table sorting inconsistent',
        description: 'Sorting numeric columns sometimes produces incorrect order.',
        status: 'IN_REVIEW',
        priority: 'MEDIUM',
        createdAt: '2026-05-10',
        updatedAt: '2026-05-13'
    },
    {
        id: 28,
        title: 'Form validation messages overlap',
        description: 'Validation errors visually overlap input fields on mobile devices.',
        status: 'OPEN',
        priority: 'LOW',
        createdAt: '2026-05-11',
        updatedAt: '2026-05-12'
    },
    {
        id: 29,
        title: 'File drag-and-drop area broken',
        description: 'Dropping files into upload zone does not trigger upload handler.',
        status: 'BACKLOG',
        priority: 'HIGH',
        createdAt: '2026-05-09',
        updatedAt: '2026-05-11'
    },
    {
        id: 30,
        title: 'Unread messages counter delayed',
        description: 'Sidebar message counter updates several seconds after receiving messages.',
        status: 'OPEN',
        priority: 'MEDIUM',
        createdAt: '2026-05-15',
        updatedAt: '2026-05-16'
    },
    {
        id: 31,
        title: 'Modal window cannot be closed',
        description: 'Escape key and overlay click fail to close modal dialogs.',
        status: 'IN_PROGRESS',
        priority: 'HIGH',
        createdAt: '2026-05-14',
        updatedAt: '2026-05-15'
    },
    {
        id: 32,
        title: 'Broken redirect after registration',
        description: 'New users are redirected to a blank page after signup.',
        status: 'OPEN',
        priority: 'URGENT',
        createdAt: '2026-05-13',
        updatedAt: '2026-05-16'
    },
    {
        id: 33,
        title: 'Search results pagination incorrect',
        description: 'Pagination controls show invalid page counts after filtering results.',
        status: 'IN_REVIEW',
        priority: 'MEDIUM',
        createdAt: '2026-05-12',
        updatedAt: '2026-05-14'
    },
    {
        id: 34,
        title: 'Rich text editor loses formatting',
        description: 'Bold and italic formatting disappear after saving content.',
        status: 'OPEN',
        priority: 'HIGH',
        createdAt: '2026-05-11',
        updatedAt: '2026-05-15'
    },
    {
        id: 35,
        title: 'Notification sound plays twice',
        description: 'Incoming notifications trigger duplicate audio playback.',
        status: 'CLOSED',
        priority: 'LOW',
        createdAt: '2026-05-09',
        updatedAt: '2026-05-10'
    }
]