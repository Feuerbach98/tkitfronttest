export default
    {
        'nodes': [
            {
                'type': 'command', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'command', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'title': {
                            'type': 'text', 'is_required': true
                        }
                    }
                }
            },
            {
                'type': 'state', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'state', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'state name': {
                            'type': 'text', 'is_required': true
                        }
                    }
                }
            },
            {
                'type': 'action', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'send message', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'message': {
                            'type': 'text', 'is_required': true
                        }
                    }
                }
            },
            {
                'type': 'action', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'input'
                    }, 'port2': {
                        'id': 'port2', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'send photo', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'url': {
                            'type': 'url', 'is_required': true
                        }, 'caption': {
                            'type': 'text', 'is_required': false
                        }
                    }
                }
            },
            {
                'type': 'action', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'input'
                    }, 'port2': {
                        'id': 'port2', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'send audio', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'url': {
                            'type': 'url', 'is_required': true
                        }, 'caption': {
                            'type': 'text', 'is_required': false
                        }
                    }
                }
            },
            {
                'type': 'action', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'input'
                    }, 'port2': {
                        'id': 'port2', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'send voice', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'url': {
                            'type': 'url', 'is_required': true
                        }, 'caption': {
                            'type': 'text', 'is_required': false
                        }
                    }
                }
            },
            {
                'type': 'action', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'input'
                    }, 'port2': {
                        'id': 'port2', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'send video', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'url': {
                            'type': 'url', 'is_required': true
                        }, 'caption': {
                            'type': 'text', 'is_required': false
                        }
                    }
                }
            },
            {
                'type': 'action', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'input'
                    }, 'port2': {
                        'id': 'port2', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'send document', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'url': {
                            'type': 'url', 'is_required': true
                        }, 'caption': {
                            'type': 'text', 'is_required': false
                        }
                    }
                }
            },
            {
                'type': 'action', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'input'
                    }, 'port2': {
                        'id': 'port2', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'set state', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'state name': {
                            'type': 'text', 'is_required': true
                        }
                    }
                }
            },
            {
                'type': 'action', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'input'
                    }, 'port2': {
                        'id': 'port2', 'type': 'output'
                    }
                }, 'properties': {
                    'title': 'command', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {}
                }
            },
            {
                'type': 'condition', 'ports': {
                    'port1': {
                        'id': 'port1', 'type': 'input'
                    }, 'port2': {
                        'id': 'port2', 'type': 'output', 'value': true
                    }, 'port3': {
                        'id': 'port3', 'type': 'output', 'value': false
                    }
                }, 'properties': {
                    'title': 'condition', 'description': "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n", 'fields': {
                        'from': {
                            'type': 'select', 'is_required': true, 'options': {
                                'message': 'message', 'call': 'call'
                            }
                        }, 'type': {
                            'type': 'select', 'is_required': true, 'options': {
                                'is': 'something == value', 'in': 'something in value'
                            }
                        }
                    }
                }
            }
        ]
    }