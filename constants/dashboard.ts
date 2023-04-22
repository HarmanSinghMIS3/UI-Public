import { LangObjShape } from './types'

export type ProcessStepsType = [ LangObjShape ]

export const DASHBOARD = {
    title: {
        'en-CA': 'Dashboard Page (English)',
        'fr-CA': 'Dashboard Page (French)'
    },
    heading: {
        'en-CA': 'Data Collection Dashboard (English)',
        'fr-CA': 'Data Collection Dashboard (French)'
    },
    userLabel: {
        'en-CA': 'User (English):',
        'fr-CA': 'User (French) :'
    },
    userValue: {
        'en-CA': 'John Smith',
        'fr-CA': 'John Smith'
    },
    loginTimeLabel: {
        'en-CA': 'Login Time (English):',
        'fr-CA': 'Login Time (French):'
    },
    loginTimeValue: {
        'en-CA': '8:32 AM',
        'fr-CA': '8:32 AM'
    },
    instructionsLead: {
        'en-CA': 'English lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'fr-CA': 'English lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    instructions: {
        'en-CA': 'Cras ullamcorper non est et volutpat. Etiam eleifend nulla ex, vel dignissim justo feugiat eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tempor eros et volutpat efficitur. Aliquam rutrum venenatis sapien ut molestie. Integer a purus at eros mollis tincidunt eu ac orci. Integer vulputate lacus eu blandit viverra. Nunc viverra vulputate ante, vel volutpat eros. Ut vitae aliquet lacus.',
        'fr-CA': 'Cras ullamcorper non est et volutpat. Etiam eleifend nulla ex, vel dignissim justo feugiat eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tempor eros et volutpat efficitur. Aliquam rutrum venenatis sapien ut molestie. Integer a purus at eros mollis tincidunt eu ac orci. Integer vulputate lacus eu blandit viverra. Nunc viverra vulputate ante, vel volutpat eros. Ut vitae aliquet lacus.'
    },
    createReport: {
        'en-CA': 'Create Report (English)',
        'fr-CA': 'Create Report (French)'
    },
    submitReport: {
        'en-CA': 'Submit Report (English)',
        'fr-CA': 'Submit Report (French)'
    },
    progressLabel: {
        'en-CA': 'Generation of report’s progress (English)',
        'fr-CA': 'Generation of report’s progress (French)'
    },
    statusMessages: [
        {
            'en-CA': '',
            'fr-CA': ''
        },
        {
            'en-CA': 'Report is Being Created. (English)',
            'fr-CA': 'Report is Being Created. (English)'
        },
        {
            'en-CA': 'The report has been created. Select ”Submit Report”. (English)',
            'fr-CA': 'The report has been created. Select ”Submit Report”. (English)'
        },
        {
            'en-CA': 'The report has been submitted. (English)',
            'fr-CA': 'The report has been submitted. (English)'
        }
    ],
    processSteps: [
        {
            'en-CA': 'Reading from Sources (English)',
            'fr-CA': 'Reading from Sources (French)'
        },
        {
            'en-CA': 'File Validation (English)',
            'fr-CA': 'File Validation (French)'
        },
        {
            'en-CA': 'Building Report Template (English)',
            'fr-CA': 'Building Report Template (French)'
        },
        {
            'en-CA': 'Report Completed (English)',
            'fr-CA': 'Report Completed (French)'
        }
    ],
    stepIncomplete: {
        'en-CA': 'Incomplete (English)',
        'fr-CA': 'Incomplete (French)'
    },
    stepCompleted: {
        'en-CA': 'Completed (English)',
        'fr-CA': 'Completed (French)'
    }
}