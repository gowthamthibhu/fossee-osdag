import axios from 'axios';

export async function fetchNavigationData() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/navigation-items/');
    const data = response.data;

    // Map the data to the required structure
    const sidebarMenuItems = data
      .filter(item => item.category === 'sidebarMenuItems')
      .map(item => ({
        icon: item.icon,
        text: item.text,
        selected: false, // Default value
      }));

    const topNavTabs = data
      .filter(item => item.category === 'topNavTabs')
      .map(item => ({
        id: item.id,
        icon: item.icon,
        text: item.text,
      }));

    const momentConnectionTabs = data
      .filter(item => item.category === 'momentConnectionTabs')
      .map(item => ({
        id: item.id,
        text: item.text,
      }));

    const connectionCards = {};
    data
      .filter(item => item.category === 'connectionCards')
      .forEach(item => {
        if (!connectionCards[item.parent_id]) {
          connectionCards[item.parent_id] = [];
        }
        connectionCards[item.parent_id].push({
          title: item.text,
          image: 'placeholder.png', // Default image
        });
      });

    return { sidebarMenuItems, topNavTabs, momentConnectionTabs, connectionCards };
  } catch (error) {
    console.error('Error fetching navigation data:', error);
    return { sidebarMenuItems: [], topNavTabs: [], momentConnectionTabs: [], connectionCards: {} };
  }
}