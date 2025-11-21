import { type UiSchema } from '@rjsf/utils';

const uiSchema: UiSchema = {
  'ui:globalOptions': {
    // Default global extra options
    xLabelDisplay: undefined,
    xObjectDescriptionDisplay: true,
    xArrayDescriptionDisplay: true,
    xFieldDescriptionDisplay: true,
    xFieldDescriptionLocation: 'above',
    xDescriptionAsDetails: false,
    xDescriptionAsDetailsOpen: false,
    // These are global only
    xGlobalMultiSchemaAltLabelDisplay: false,
    xGlobalMultiSchemaAltDescriptionDisplay: true,
    xGlobalMultiSchemaAltDescriptionLocation: 'below',
    xGlobalMultiSchemaAltDescriptionAsDetails: false,
    xGlobalMultiSchemaAltDescriptionAsDetailsOpen: false
  } as object,
  // Root UI options
  'ui:options': {
    xDescriptionAsDetails: false,
    // The description is displayed by the object template
    xFieldDescriptionDisplay: false
  },
  // UI options for individual fields
  schema: {
    'ui:options': {
      readonly: true
    }
  },
  version: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit"
        }
      }
    ]
  },
  versionDate: {},
  versionInfo: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  summary: {
    'ui:options': {
      widget: "TextAreaWidget"
    }
  },
  purpose: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  baseline: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  inclusionCriteria: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  exclusionCriteria: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  targets: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  studyDesign: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  temporalCoverage: {
    'ui:options': {
    }
  },
  geographicCoverage: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          label: false
        },
        geographicUnits: {
          items: {
            'ui:options': {
              label: false,
              xFieldDescriptionDisplay: false
            },
            countryCode: {
              'ui:options': {
                widget: 'CountryWidget',
                xFieldDescriptionDisplay: false
              }
            },
            countrySubdivisionCodes: {
              // array-level options (unchanged UI for Add/Remove buttons)
              'ui:options': {
                orderable: true,
                addable: true,
                removable: true
              },
              // make each *item* a SubdivisionPicker
              items: {
                'ui:options': {
                  widget: 'CountrySubdivisionWidget',
                  countryField: "geography.country"
                }
              },
            }
          }
        },
        geographicInfo: {
          'ui:options': {
            widget: "TextAreaWidget"
          }
        }
      }
    ]
  },
  dataSampling: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  acquisitionMethods: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  annotationMethods: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      },
      {
      },
      {
        'ui:options': {
          readonly: true,
          disabled: true,
          placeholder: "Not Applicable"
        }
      }
    ]
  },
  limitations: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  dataPreprocessing: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  healthcareSettings: {
    oneOf: [
      {
        'ui:options': {
          label: false
        },
        items: {
          'ui:options': {
            label: false,
            classNames: 'x-list-items'
          }
        }
      }
    ]
  },
  dataSources: {
    oneOf: [
      {
        'ui:options': {
          label: false
        },
        items: {
          'ui:options': {
            label: false,
            xFieldDescriptionDisplay: true,
            classNames: 'x-list-items'
          },
          url: {
            'ui:options': {
              xFieldDescriptionLocation: 'below'
            }
          },
          title: {
            'ui:options': {
              xFieldDescriptionLocation: 'below'
            }
          },
          description: {
            'ui:options': {
              xFieldDescriptionLocation: 'below'
            }
          }

        }
      }
    ]
  },
  additionalDocumentation: {
    'ui:options': {
      xDescriptionLocation: 'above'
    },
    oneOf: [
      {
        'ui:options': {
          label: false,
        },
        items: {
          'ui:options': {
            label: false,
            classNames: 'x-list-items'
          },
          description: {
            'ui:options': {
              widget: "TextAreaWidget"
            }
          }
        }
      }
    ]
  },
  dataFormats: {
    items: {
      'ui:options': {
        label: false,
        classNames: 'x-list-items'
      },
      oneOf: [
        {
          'ui:options': {
            label: false
          },
          dataModality: {
            'ui:options': {
              widget: "hidden"
            }
          },
          dataFormats: {
            'ui:options': {
              label: false
            },
            items: {
              'ui:options': {
                label: false
              },
            }
          }
        },
        {
          'ui:options': {
            label: false
          },
          dataModality: {
            'ui:options': {
              widget: "hidden"
            }
          },
          dataFormats: {
            'ui:options': {
              label: false
            },
            items: {
              'ui:options': {
                label: false
              },
            }
          }
        },
        {
          'ui:options': {
            label: false
          },
          dataModality: {
            'ui:options': {
              widget: "hidden"
            }
          },
          dataFormats: {
            'ui:options': {
              label: false
            },
            items: {
              'ui:options': {
                label: false
              },
            }
          }
        }

      ]
    }
  },
  privacyCompliance: {
    oneOf: [
      {
        'ui:options': {
          widget: "TextAreaWidget",
          title: "Edit"
        }
      }
    ]
  },
  ethicsApproval: {
    'ui:options': {
      xDescriptionLocation: 'above'
    },
    oneOf: [
      {
        'ui:options': {
          label: false
        },
        items: {
          'ui:options': {
            label: false,
          },
          approved: {
            'ui:options': {
            },
            oneOf: [
              {},
              {
                'ui:options': {
                  readonly: true,
                  disabled: true,
                  placeholder: "not required"
                }
              }
            ]
          },
          approvalAuthority: {
            oneOf: [
              {
                'ui:options': {
                  title: "Edit",
                  widget: "TextAreaWidget"
                }
              }
            ]
          },
          approvalNumber: {
            oneOf: [
              {
                'ui:options': {
                  title: "Edit"
                }
              }
            ]
          },
          approvalDetails: {
            oneOf: [
              {
                'ui:options': {
                  title: "Edit",
                  widget: "TextAreaWidget"
                }
              }
            ]
          }
        }
      }
    ]
  },
  patientConsent: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  acknowledgements: {
    'ui:options': {
      widget: "TextAreaWidget"
    }
  },
  funding: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      }
    ]
  },
  owners: {
    'ui:options': {
      xDescriptionLocation: 'above'
    },
    oneOf: [
      {
        'ui:options': {
          label: false
        },
        items: {
          contactDetails: {
            oneOf: [
              {
                'ui:options': {
                  label: false
                }
              },
              {
                'ui:options': {
                  label: false
                }
              }
            ]
          }
        }
      }
    ]
  },
  howToCite: {
    oneOf: [
      {
        'ui:options': {
          label: false
        },
        instructions: {
          oneOf: [
            {
              'ui:options': {
                title: "Edit",
                widget: "TextAreaWidget"
              }
            },
            {
              'ui:options': {
                readonly: true,
                disabled: true,
                placeholder: "not applicable"
              }
            }
          ]
        },
        citations: {
          items: {
            'ui:options': {
              label: false,
              xDescriptionDisplay: false
            }
          }
        }
      }
    ]
  },
  references: {
    oneOf: [
      {
        'ui:options': {
          title: "Edit",
          widget: "TextAreaWidget"
        }
      },
      {
        'ui:options': {
          readonly: true,
          disabled: true,
          placeholder: "not applicable"
        }
      }
    ]
  },
  modellingTasks: {
    items: {
      'ui:options': {
        label: false,
        xDescriptionDisplay: false
      },
      anyOf: [
        { // Pre-defined task
          'ui:options': {
            label: false,
            xDescriptionDisplay: false
          }
        },
        { // Custom task
          'ui:options': {
            label: false,
            xDescriptionDisplay: false
          }
        }
      ]
    }
  },
  tags: {
    items: {
      'ui:options': {
        label: false
      }
    }
  },
  licence: {
    oneOf: [
      { // URL Link
        'ui:options': {
          label: false,
          xDescriptionDisplay: false,
          classNames: 'x-rich-url'
        }
      },
      { // Licence Text
        'ui:options': {
          widget: "TextAreaWidget",
          label: true,
          xDescriptionLocation: 'below'
        }
      }
    ]
  }
}

export default uiSchema;
