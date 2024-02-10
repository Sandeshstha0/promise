import type { Schema, Attribute } from '@strapi/strapi';

export interface DescriptionStudy extends Schema.Component {
  collectionName: 'components_description_studies';
  info: {
    displayName: 'Study';
    icon: 'user';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    logo: Attribute.Media;
  };
}

export interface DescriptionWhyStudyInTheUsa extends Schema.Component {
  collectionName: 'components_description_why_study_in_the_usas';
  info: {
    displayName: 'Why Study in the USA';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface HomeIntroduction extends Schema.Component {
  collectionName: 'components_home_introductions';
  info: {
    displayName: 'Introduction';
    icon: 'cog';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomePartners extends Schema.Component {
  collectionName: 'components_home_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomeQuestions extends Schema.Component {
  collectionName: 'components_home_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomeSuccessRate extends Schema.Component {
  collectionName: 'components_home_success_rates';
  info: {
    displayName: 'success-rate';
  };
  attributes: {
    title: Attribute.String;
    number: Attribute.Integer;
    description: Attribute.String;
  };
}

export interface HomeThoughts extends Schema.Component {
  collectionName: 'components_home_thoughts';
  info: {
    displayName: 'thoughts';
  };
  attributes: {
    review: Attribute.Text;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'description.study': DescriptionStudy;
      'description.why-study-in-the-usa': DescriptionWhyStudyInTheUsa;
      'home.introduction': HomeIntroduction;
      'home.partners': HomePartners;
      'home.questions': HomeQuestions;
      'home.success-rate': HomeSuccessRate;
      'home.thoughts': HomeThoughts;
    }
  }
}
