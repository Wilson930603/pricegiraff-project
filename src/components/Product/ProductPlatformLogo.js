import { classNames, platformInfo } from 'helpers';

export default function ProductPlatformLogo({
  product = {},
  sizeClass = '',
  className = ''
}) {
  const { name: platform, logo: platformLogo } = platformInfo(product);

  if (platformLogo) {
    return (
      <div className={classNames(className, sizeClass)}>
        <img
          src={platformLogo}
          alt=""
          className={classNames('w-full h-auto', sizeClass)}
        />
      </div>
    );
  }

  return (
    <div className={classNames('text-13px truncate', sizeClass, className)}>
      {platform}
    </div>
  );
}
