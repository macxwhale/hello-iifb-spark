import { useState, useEffect } from 'react';
import packageJson from '../../package.json';

interface VersionInfo {
  version: string;
  buildDate: string;
  environment: string;
  gitCommit: string;
  description: string;
}

export const useVersion = () => {
  const [versionInfo, setVersionInfo] = useState<VersionInfo>({
    version: packageJson.version || '1.0.0',
    buildDate: new Date().toISOString(),
    environment: import.meta.env.MODE || 'development',
    gitCommit: '',
    description: 'IIFB SBSTTA-27 & SB8J-1 Panama 2025'
  });

  useEffect(() => {
    // Try to load version.json if available
    fetch('/version.json')
      .then(response => response.json())
      .then(data => {
        setVersionInfo(prev => ({
          ...prev,
          ...data,
          version: data.version || prev.version,
          environment: import.meta.env.MODE || data.environment || prev.environment
        }));
      })
      .catch(() => {
        // Fall back to package.json version if version.json is not available
        console.debug('version.json not found, using package.json version');
      });
  }, []);

  const getDisplayVersion = () => {
    const isDev = versionInfo.environment === 'development';
    return isDev ? `v${versionInfo.version}-dev` : `v${versionInfo.version}`;
  };

  const getTooltipInfo = () => {
    return `Version: ${versionInfo.version}\nEnvironment: ${versionInfo.environment}\nBuild: ${new Date(versionInfo.buildDate).toLocaleDateString()}${versionInfo.gitCommit ? `\nCommit: ${versionInfo.gitCommit.slice(0, 7)}` : ''}`;
  };

  return {
    ...versionInfo,
    displayVersion: getDisplayVersion(),
    tooltipInfo: getTooltipInfo()
  };
};