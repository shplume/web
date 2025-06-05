import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  header: {
    processDesign: 'Process Design',
    processMonitoring: 'Process Monitoring',
    aiAnalyzer: 'AI Analyzer',
    scheduleDemo: 'Schedule a Demo'
  },
  hero: {
    title: 'AI Engineer for your Factory',
    subtitle: 'Process Design | Process Monitoring | Root Cause Analysis',
    cta: 'Schedule a Demo'
  },
  processDesign: {
    title: 'Taomo AI Process Design',
    features: [
      'Drawing Recognition',
      'Process Generating'
    ]
  },
  processMonitoring: {
    title: 'Taomo AI Monitoring',
    description: 'When traditional monitoring tools throw you hundreds of emails, we monitor quality, select warning and prioritize your daily tasks.',
    features: [
      'Monitor',
      'Plan your Tasks'
    ]
  },
  aiAnalyzer: {
    title: 'Taomo AI Analyzer',
    steps: [
      'Start from a problem',
      'Tells me why....',
      'What should I do?'
    ]
  },
  results: {
    title: 'And the results will speak for themselves',
    stats: [
      { value: '30%', label: 'Defect reduction' },
      { value: '10X', label: 'Engineering Efficiency' },
      { value: '50%', label: 'More Effective Solutions' },
      { value: 'Millions', label: 'Operation Cost Reduction' }
    ]
  },
  platform: {
    title: 'platform',
    description: 'The platform automates analysis of production line data, uses AI agents to evaluate hypotheses in parallel, and communicates with engineers using real language through an LLM interface.',
    features: [
      'Taomo Platform',
      'Agent',
      'LLM',
      'Advanced Analytics',
      'Machine Learning'
    ]
  },
  products: {
    title: 'Product For',
    items: [
      {
        title: 'Automotive Factories',
        description: 'Improve Productivity With On Premise Or Cloud Deployment'
      },
      {
        title: 'Equipment Manufacturers',
        description: 'Augment Equipment Performance With Machine Intelligence'
      },
      {
        title: 'Solution Integrator',
        description: 'Partner With Us To Embed Data Science In Factory Solutions'
      }
    ]
  },
  footer: {
    contactUs: 'Contact Us',
    solutions: 'Solutions',
    products: 'Products',
    copyright: '© 2023 Taomo.ai. All rights reserved.'
  }
};

// Chinese translations
const zhTranslations = {
  header: {
    processDesign: '流程设计',
    processMonitoring: '流程监控',
    aiAnalyzer: 'AI分析器',
    scheduleDemo: '预约演示'
  },
  hero: {
    title: '工厂AI工程师',
    subtitle: '流程设计 | 流程监控 | 根因分析',
    cta: '预约演示'
  },
  processDesign: {
    title: 'Taomo AI 流程设计',
    features: [
      '图纸识别',
      '流程生成'
    ]
  },
  processMonitoring: {
    title: 'Taomo AI 监控',
    description: '当传统监控工具向您发送数百封电子邮件时，我们监控质量，选择警告并优先处理您的日常任务。',
    features: [
      '监控',
      '规划任务'
    ]
  },
  aiAnalyzer: {
    title: 'Taomo AI 分析器',
    steps: [
      '从问题开始',
      '告诉我为什么....',
      '我应该做什么？'
    ]
  },
  results: {
    title: '结果将不言而喻',
    stats: [
      { value: '30%', label: '缺陷减少' },
      { value: '10X', label: '工程效率' },
      { value: '50%', label: '更有效的解决方案' },
      { value: '数百万', label: '运营成本降低' }
    ]
  },
  platform: {
    title: '平台',
    description: '该平台自动分析生产线数据，使用AI代理并行评估假设，并通过LLM接口使用真实语言与工程师沟通。',
    features: [
      'Taomo平台',
      '代理',
      'LLM',
      '高级分析',
      '机器学习'
    ]
  },
  products: {
    title: '产品适用于',
    items: [
      {
        title: '汽车工厂',
        description: '通过本地或云部署提高生产力'
      },
      {
        title: '设备制造商',
        description: '通过机器智能增强设备性能'
      },
      {
        title: '解决方案集成商',
        description: '与我们合作，将数据科学嵌入工厂解决方案'
      }
    ]
  },
  footer: {
    contactUs: '联系我们',
    solutions: '解决方案',
    products: '产品',
    copyright: '© 2023 Taomo.ai. 保留所有权利。'
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      zh: {
        translation: zhTranslations
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;