const apps = [
    {name: 'Illustrator', icon: '/icons/illustrator.png'},
    {name: 'Photoshop', icon: '/icons/photoshop.png'},
    {name: 'After Effects', icon: '/icons/after-effects.png'},
    {name: 'Figma', icon: '/icons/figma.png'},
    {name: 'Notion', icon: '/icons/notion.png'},
    {name: 'Discord', icon: '/icons/discord.png'},
    {name: 'Slack', icon: '/icons/slack.png'},
    {name: 'Spotify', icon: '/icons/spotify.png'},
    {name: 'Trello', icon: '/icons/trello.png'},
]

export default function Dock() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gray-900 rounded-t-lg shadow-lg">
            <div className="flex items-center space-x-4">
                {apps.map((app) => (
                    <div key={app.name} className="flex flex-col items-center">
                        <img src={app.icon} alt={app.name} className="w-8 h-8" />
                        <span className="text-xs text-white">{app.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}