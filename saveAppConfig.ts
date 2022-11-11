import appConfigVar from './appConfigVar';

export default function saveAppConfig() {
    window.localStorage.setItem(
        'aslettz-portfolio-config',
        JSON.stringify(appConfigVar())
    );
}