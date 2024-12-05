export function platformInfo(product) {
  return (product.all_platform_infos && product.all_platform_infos[0]) || {};
}
