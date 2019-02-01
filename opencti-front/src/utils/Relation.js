const relationsTypesMapping = {
  'threat-actor_attack-pattern': ['uses'],
  'threat-actor_country': ['targets'],
  'threat-actor_city': ['targets'],
  'threat-actor_sector': ['targets'],
  'threat-actor_organization': ['targets'],
  'threat-actor_user': ['targets', 'attributed-to'],
  'threat-actor_malware': ['uses'],
  'threat-actor_tool': ['uses'],
  'threat-actor_vulnerability': ['targets'],
  'intrusion-set_attack-pattern': ['uses'],
  'intrusion-set_country': ['targets', 'localization', 'attributed-to'],
  'intrusion-set_city': ['targets', 'localization', 'attributed-to'],
  'intrusion-set_sector': ['targets'],
  'intrusion-set_organization': ['targets', 'attributed-to'],
  'intrusion-set_threat-actor': ['targets', 'attributed-to'],
  'intrusion-set_user': ['targets', 'attributed-to'],
  'intrusion-set_tool': ['uses'],
  'intrusion-set_malware': ['uses'],
  'intrusion-set_vulnerability': ['targets'],
  'campaign_threat-actor': ['attributed-to'],
  'campaign_intrusion-set': ['attributed-to'],
  'campaign_attack-pattern': ['uses'],
  campaign_county: ['targets'],
  campaign_city: ['targets'],
  campaign_sector: ['targets'],
  campaign_organization: ['targets', 'attributed-to'],
  campaign_user: ['attributed-to', 'targets'],
  campaign_malware: ['uses'],
  campaign_vulnerability: ['targets'],
  incident_country: ['targets', 'attributed-to'],
  incident_city: ['targets', 'attributed-to'],
  incident_organization: ['targets', 'attributed-to'],
  incident_sector: ['targets'],
  'incident_threat-actor': ['attributed-to'],
  'incident_intrusion-set': ['attributed-to'],
  incident_malware: ['uses'],
  incident_vulnerability: ['targets'],
  'malware_attack-pattern': ['uses'],
  malware_vulnerability: ['targets'],
  malware_tool: ['uses'],
  malware_malware: ['variant-of'],
  city_country: ['localization'],
  organization_country: ['localization'],
  organization_city: ['localization'],
  organization_sector: ['gathering'],
  user_organization: ['gathering'],
};

export const resolveRelationsTypes = (fromType, toType) => (relationsTypesMapping[`${fromType}_${toType}`] ? relationsTypesMapping[`${fromType}_${toType}`] : []);

export const resolveRoles = (type) => {
  switch (type) {
    case 'targets':
      return { fromRole: 'source', toRole: 'target' };
    case 'uses':
      return { fromRole: 'user', toRole: 'usage' };
    case 'attributed-to':
      return { fromRole: 'attribution', toRole: 'origin' };
    case 'variant-of':
      return { fromRole: 'variation', toRole: 'original' };
    case 'gathering':
      return { fromRole: 'part_of', toRole: 'gather' };
    case 'related-to':
      return { fromRole: 'relate_from', toRole: 'relate_to' };
    case 'localization':
      return { fromRole: 'localized', toRole: 'location' };
    default:
      return { fromRole: '', toRole: '' };
  }
};