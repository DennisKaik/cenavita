var example = {
    "catalogue_item_notification:catalogueItemNotificationMessage": {
      "-xmlns:sh": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader",
      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "-xmlns:catalogue_item_notification": "urn:gs1:gdsn:catalogue_item_notification:xsd:3",
      "-xsi:schemaLocation": "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader http://www.gdsregistry.org/3.1/schemas/sbdh/StandardBusinessDocumentHeader.xsd urn:gs1:gdsn:catalogue_item_notification:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/CatalogueItemNotification.xsd",
      "sh:StandardBusinessDocumentHeader": {
        "sh:HeaderVersion": "1.0",
        "sh:Sender": {
          "sh:Identifier": {
            "-Authority": "GS1",
            "#text": "4260394010009"
          }
        },
        "sh:Receiver": {
          "sh:Identifier": {
            "-Authority": "GS1",
            "#text": "4049111100007"
          }
        },
        "sh:DocumentIdentification": {
          "sh:Standard": "GS1",
          "sh:TypeVersion": "3.1",
          "sh:InstanceIdentifier": "c9990719-8068-498f-a398-37b046655d30",
          "sh:Type": "catalogueItemNotification",
          "sh:MultipleType": "false",
          "sh:CreationDateAndTime": "2017-05-30T13:15:30.129Z"
        }
      },
      "transaction": {
        "transactionIdentification": {
          "entityIdentification": "c419f7f0-522a-4a89-be29-cafc03bf84a8",
          "contentOwner": { "gln": "4260394010009" }
        },
        "documentCommand": {
          "documentCommandHeader": {
            "-type": "ADD",
            "documentCommandIdentification": {
              "entityIdentification": "c419f7f0-522a-4a89-be29-cafc03bf84a8",
              "contentOwner": { "gln": "4260394010009" }
            }
          },
          "catalogue_item_notification:catalogueItemNotification": {
            "creationDateTime": "2017-05-30T13:15:30.129Z",
            "documentStatusCode": "ORIGINAL",
            "documentStructureVersion": "3.1",
            "lastUpdateDateTime": "2017-05-30T13:15:30.129Z",
            "catalogueItemNotificationIdentification": {
              "entityIdentification": "c419f7f0-522a-4a89-be29-cafc03bf84a8",
              "contentOwner": { "gln": "4260394010009" }
            },
            "isReload": "false",
            "catalogueItem": {
              "catalogueItemState": { "catalogueItemStateCode": "REGISTERED" },
              "tradeItem": {
                "gtin": "74260394015423",
                "additionalTradeItemIdentification": {
                  "-additionalTradeItemIdentificationTypeCode": "SUPPLIER_ASSIGNED",
                  "#text": "74260394015423"
                },
                "isTradeItemABaseUnit": "false",
                "isTradeItemAConsumerUnit": "false",
                "isTradeItemADespatchUnit": "true",
                "isTradeItemAnInvoiceUnit": "true",
                "isTradeItemAnOrderableUnit": "true",
                "tradeItemUnitDescriptorCode": "PALLET",
                "tradeItemTradeChannelCode": "GROCERY",
                "informationProviderOfTradeItem": {
                  "gln": "4260394010009",
                  "partyName": "Jean Jartin UG"
                },
                "gdsnTradeItemClassification": {
                  "gpcCategoryCode": "10000003",
                  "gpcCategoryDefinition": "Fruit - Unprepared/Unprocessed (Shelf Stable)",
                  "gpcCategoryName": "Fruit - Unprepared/Unprocessed (Shelf Stable)",
                  "gDSNTradeItemClassificationAttribute": [
                    {
                      "gpcAttributeTypeCode": "20000352",
                      "gpcAttributeValueCode": "30002772",
                      "gpcAttributeTypeName": "Formation",
                      "gpcAttributeValueName": "WHOLE"
                    },
                    {
                      "gpcAttributeTypeCode": "20000142",
                      "gpcAttributeValueCode": "30002960",
                      "gpcAttributeTypeName": "If Organic",
                      "gpcAttributeValueName": "NO"
                    },
                    {
                      "gpcAttributeTypeCode": "20000109",
                      "gpcAttributeValueCode": "30002960",
                      "gpcAttributeTypeName": "If Pitted/Stoned",
                      "gpcAttributeValueName": "NO"
                    },
                    {
                      "gpcAttributeTypeCode": "20000076",
                      "gpcAttributeValueCode": "30002515",
                      "gpcAttributeTypeName": "Type of Fruit",
                      "gpcAttributeValueName": "UNCLASSIFIED"
                    }
                  ]
                },
                "nextLowerLevelTradeItemInformation": {
                  "quantityOfChildren": "1",
                  "totalQuantityOfNextLowerLevelTradeItem": "392",
                  "childTradeItem": {
                    "gtin": "14260394015421",
                    "quantityOfNextLowerLevelTradeItem": "392"
                  }
                },
                "targetMarket": { "targetMarketCountryCode": "276" },
                "tradeItemInformation": {
                  "extension": {
                    "delivery_purchasing_information:deliveryPurchasingInformationModule": {
                      "-xmlns:delivery_purchasing_information": "urn:gs1:gdsn:delivery_purchasing_information:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:delivery_purchasing_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/DeliveryPurchasingInformationModule.xsd",
                      "deliveryPurchasingInformation": { "startAvailabilityDateTime": "2016-12-24T00:00:00+00:00" }
                    },
                    "packaging_information:packagingInformationModule": {
                      "-xmlns:packaging_information": "urn:gs1:gdsn:packaging_information:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:packaging_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/PackagingInformationModule.xsd",
                      "packaging": [
                        {
                          "isRadioFrequencyIDOnPackaging": "false",
                          "packagingTypeCode": "PX"
                        },
                        {
                          "platformTermsAndConditionsCode": "2",
                          "platformTypeCode": "11"
                        }
                      ]
                    },
                    "packaging_marking:packagingMarkingModule": {
                      "-xmlns:packaging_marking": "urn:gs1:gdsn:packaging_marking:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:packaging_marking:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/PackagingMarkingModule.xsd",
                      "packagingMarking": {
                        "hasBatchNumber": "true",
                        "isPackagingMarkedReturnable": "false",
                        "packagingDate": { "tradeItemDateOnPackagingTypeCode": "DISPLAY_UNTIL_DATE" }
                      }
                    },
                    "trade_item_data_carrier_and_identification:tradeItemDataCarrierAndIdentificationModule": {
                      "-xmlns:trade_item_data_carrier_and_identification": "urn:gs1:gdsn:trade_item_data_carrier_and_identification:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_data_carrier_and_identification:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemDataCarrierAndIdentificationModule.xsd",
                      "dataCarrier": { "dataCarrierTypeCode": "ITF_14" }
                    },
                    "trade_item_description:tradeItemDescriptionModule": {
                      "-xmlns:trade_item_description": "urn:gs1:gdsn:trade_item_description:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_description:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemDescriptionModule.xsd",
                      "tradeItemDescriptionInformation": {
                        "additionalTradeItemDescription": {
                          "-languageCode": "de",
                          "#text": "# Olivas Sevillanas - Die Königin unter den Oliven! Aufgrund ihres ausgezeichneten Geschmacks ist die Manzanilla die beliebteste Speiseolive der Welt. Der traditionelle Ursprungsort dieser Sorte ist das Dorf “Dos Hermanas” in Sevilla. Nur die Steinfrüchte höchster Handelsklasse gipfeln in der Auswahl unserer Manzanilla Sevillana. Für Freunde des Originals! Jean Jartin´s Feinschmecker-Tipp: Nach Wunsch noch mit frischer (!) Petersilie, Knoblauchgranulat (sandkorngroß) und Rosmarien toppen. "
                        },
                        "descriptionShort": {
                          "-languageCode": "de",
                          "#text": "# OLIVAS Sevillanas"
                        },
                        "functionalName": {
                          "-languageCode": "de",
                          "#text": "Oliven"
                        },
                        "tradeItemDescription": {
                          "-languageCode": "de",
                          "#text": "# OLIVAS Sevillanas - Milde Manzanilla Oliven aus Sevilla"
                        },
                        "brandNameInformation": {
                          "brandName": "Jean Jartin Oliva-del-Sol®",
                          "subBrand": "OLIVAS"
                        }
                      }
                    },
                    "trade_item_handling:tradeItemHandlingModule": {
                      "-xmlns:trade_item_handling": "urn:gs1:gdsn:trade_item_handling:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_handling:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemHandlingModule.xsd",
                      "tradeItemHandlingInformation": {
                        "tradeItemStacking": [
                          {
                            "stackingFactor": "2",
                            "stackingFactorTypeCode": "STORAGE_UNSPECIFIED"
                          },
                          {
                            "stackingFactor": "1",
                            "stackingFactorTypeCode": "TRANSPORT_UNSPECIFIED"
                          }
                        ]
                      }
                    },
                    "trade_item_hierarchy:tradeItemHierarchyModule": {
                      "-xmlns:trade_item_hierarchy": "urn:gs1:gdsn:trade_item_hierarchy:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_hierarchy:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemHierarchyModule.xsd",
                      "tradeItemHierarchy": { "quantityOfCompleteLayersContainedInATradeItem": "14" }
                    },
                    "trade_item_lifespan:tradeItemLifespanModule": {
                      "-xmlns:trade_item_lifespan": "urn:gs1:gdsn:trade_item_lifespan:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_lifespan:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemLifespanModule.xsd",
                      "tradeItemLifespan": {
                        "minimumTradeItemLifespanFromTimeOfArrival": "800",
                        "minimumTradeItemLifespanFromTimeOfProduction": "1000"
                      }
                    },
                    "trade_item_measurements:tradeItemMeasurementsModule": {
                      "-xmlns:trade_item_measurements": "urn:gs1:gdsn:trade_item_measurements:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_measurements:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemMeasurementsModule.xsd",
                      "tradeItemMeasurements": {
                        "depth": {
                          "-measurementUnitCode": "MMT",
                          "#text": "1200"
                        },
                        "height": {
                          "-measurementUnitCode": "MMT",
                          "#text": "1185"
                        },
                        "netContent": {
                          "-measurementUnitCode": "GRM",
                          "#text": "470400"
                        },
                        "width": {
                          "-measurementUnitCode": "MMT",
                          "#text": "800"
                        },
                        "tradeItemWeight": {
                          "drainedWeight": {
                            "-measurementUnitCode": "GRM",
                            "#text": "188160"
                          },
                          "grossWeight": {
                            "-measurementUnitCode": "GRM",
                            "#text": "588000"
                          },
                          "netWeight": {
                            "-measurementUnitCode": "GRM",
                            "#text": "470400"
                          }
                        },
                        "avpList": {
                          "compoundStringAVP": {
                            "-attributeName": "netContentStatement",
                            "-attributeCode": "de",
                            "-codeListNameCode": "LANGUAGE_CODE",
                            "#text": "2352 x 200 Gramm"
                          }
                        }
                      }
                    },
                    "variable_trade_item_information:variableTradeItemInformationModule": {
                      "-xmlns:variable_trade_item_information": "urn:gs1:gdsn:variable_trade_item_information:xsd:3",
                      "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                      "-xsi:schemaLocation": "urn:gs1:gdsn:variable_trade_item_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/VariableTradeItemInformationModule.xsd",
                      "variableTradeItemInformation": { "isTradeItemAVariableUnit": "false" }
                    }
                  }
                },
                "tradeItemSynchronisationDates": {
                  "lastChangeDateTime": "2016-12-23T23:38:19",
                  "effectiveDateTime": "2016-12-24T00:00:00+00:00"
                },
                "avpList": {
                  "stringAVP": [
                    {
                      "-attributeName": "tradeItemKeyWords",
                      "#text": "original Oliven Spanien sevillanas manzanilla"
                    },
                    {
                      "-attributeName": "packageDateReasonType",
                      "#text": "VOLUNTARY"
                    }
                  ]
                }
              },
              "catalogueItemChildItemLink": {
                "quantity": "392",
                "catalogueItem": {
                  "catalogueItemState": { "catalogueItemStateCode": "REGISTERED" },
                  "tradeItem": {
                    "gtin": "14260394015421",
                    "additionalTradeItemIdentification": {
                      "-additionalTradeItemIdentificationTypeCode": "SUPPLIER_ASSIGNED",
                      "#text": "14260394015421"
                    },
                    "isTradeItemABaseUnit": "false",
                    "isTradeItemAConsumerUnit": "false",
                    "isTradeItemADespatchUnit": "true",
                    "isTradeItemAnInvoiceUnit": "true",
                    "isTradeItemAnOrderableUnit": "false",
                    "tradeItemUnitDescriptorCode": "CASE",
                    "tradeItemTradeChannelCode": "GROCERY",
                    "informationProviderOfTradeItem": {
                      "gln": "4260394010009",
                      "partyName": "Jean Jartin UG"
                    },
                    "gdsnTradeItemClassification": {
                      "gpcCategoryCode": "10000003",
                      "gpcCategoryDefinition": "Fruit - Unprepared/Unprocessed (Shelf Stable)",
                      "gpcCategoryName": "Fruit - Unprepared/Unprocessed (Shelf Stable)",
                      "gDSNTradeItemClassificationAttribute": [
                        {
                          "gpcAttributeTypeCode": "20000352",
                          "gpcAttributeValueCode": "30002772",
                          "gpcAttributeTypeName": "Formation",
                          "gpcAttributeValueName": "WHOLE"
                        },
                        {
                          "gpcAttributeTypeCode": "20000142",
                          "gpcAttributeValueCode": "30002960",
                          "gpcAttributeTypeName": "If Organic",
                          "gpcAttributeValueName": "NO"
                        },
                        {
                          "gpcAttributeTypeCode": "20000109",
                          "gpcAttributeValueCode": "30002960",
                          "gpcAttributeTypeName": "If Pitted/Stoned",
                          "gpcAttributeValueName": "NO"
                        },
                        {
                          "gpcAttributeTypeCode": "20000076",
                          "gpcAttributeValueCode": "30002515",
                          "gpcAttributeTypeName": "Type of Fruit",
                          "gpcAttributeValueName": "UNCLASSIFIED"
                        }
                      ]
                    },
                    "nextLowerLevelTradeItemInformation": {
                      "quantityOfChildren": "1",
                      "totalQuantityOfNextLowerLevelTradeItem": "6",
                      "childTradeItem": {
                        "gtin": "04260394015424",
                        "quantityOfNextLowerLevelTradeItem": "6"
                      }
                    },
                    "targetMarket": { "targetMarketCountryCode": "276" },
                    "tradeItemInformation": {
                      "extension": {
                        "delivery_purchasing_information:deliveryPurchasingInformationModule": {
                          "-xmlns:delivery_purchasing_information": "urn:gs1:gdsn:delivery_purchasing_information:xsd:3",
                          "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                          "-xsi:schemaLocation": "urn:gs1:gdsn:delivery_purchasing_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/DeliveryPurchasingInformationModule.xsd",
                          "deliveryPurchasingInformation": { "startAvailabilityDateTime": "2016-12-24T00:00:00+00:00" }
                        },
                        "packaging_information:packagingInformationModule": {
                          "-xmlns:packaging_information": "urn:gs1:gdsn:packaging_information:xsd:3",
                          "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                          "-xsi:schemaLocation": "urn:gs1:gdsn:packaging_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/PackagingInformationModule.xsd",
                          "packaging": {
                            "isRadioFrequencyIDOnPackaging": "false",
                            "packagingTypeCode": "PU",
                            "packagingMaterial": { "packagingMaterialTypeCode": "PAPER_PAPERBOARD" }
                          }
                        },
                        "packaging_marking:packagingMarkingModule": {
                          "-xmlns:packaging_marking": "urn:gs1:gdsn:packaging_marking:xsd:3",
                          "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                          "-xsi:schemaLocation": "urn:gs1:gdsn:packaging_marking:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/PackagingMarkingModule.xsd",
                          "packagingMarking": {
                            "hasBatchNumber": "false",
                            "isPackagingMarkedReturnable": "true"
                          }
                        },
                        "trade_item_data_carrier_and_identification:tradeItemDataCarrierAndIdentificationModule": {
                          "-xmlns:trade_item_data_carrier_and_identification": "urn:gs1:gdsn:trade_item_data_carrier_and_identification:xsd:3",
                          "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                          "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_data_carrier_and_identification:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemDataCarrierAndIdentificationModule.xsd",
                          "dataCarrier": { "dataCarrierTypeCode": "ITF_14" }
                        },
                        "trade_item_description:tradeItemDescriptionModule": {
                          "-xmlns:trade_item_description": "urn:gs1:gdsn:trade_item_description:xsd:3",
                          "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                          "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_description:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemDescriptionModule.xsd",
                          "tradeItemDescriptionInformation": {
                            "additionalTradeItemDescription": {
                              "-languageCode": "de",
                              "#text": "# Olivas Sevillanas - Die Königin unter den Oliven! Aufgrund ihres ausgezeichneten Geschmacks ist die Manzanilla die beliebteste Speiseolive der Welt. Der traditionelle Ursprungsort dieser Sorte ist das Dorf “Dos Hermanas” in Sevilla. Nur die Steinfrüchte höchster Handelsklasse gipfeln in der Auswahl unserer Manzanilla Sevillana. Für Freunde des Originals! Jean Jartin´s Feinschmecker-Tipp: Nach Wunsch noch mit frischer (!) Petersilie, Knoblauchgranulat (sandkorngroß) und Rosmarien toppen. "
                            },
                            "descriptionShort": {
                              "-languageCode": "de",
                              "#text": "# OLIVAS Sevillanas"
                            },
                            "functionalName": {
                              "-languageCode": "de",
                              "#text": "Oliven"
                            },
                            "tradeItemDescription": {
                              "-languageCode": "de",
                              "#text": "# OLIVAS Sevillanas - Milde Manzanilla Oliven aus Sevilla"
                            },
                            "brandNameInformation": {
                              "brandName": "Jean Jartin Oliva-del-Sol®",
                              "subBrand": "OLIVAS"
                            }
                          }
                        },
                        "trade_item_measurements:tradeItemMeasurementsModule": {
                          "-xmlns:trade_item_measurements": "urn:gs1:gdsn:trade_item_measurements:xsd:3",
                          "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                          "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_measurements:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemMeasurementsModule.xsd",
                          "tradeItemMeasurements": {
                            "depth": {
                              "-measurementUnitCode": "MMT",
                              "#text": "410"
                            },
                            "height": {
                              "-measurementUnitCode": "MMT",
                              "#text": "75"
                            },
                            "netContent": {
                              "-measurementUnitCode": "GRM",
                              "#text": "1200"
                            },
                            "width": {
                              "-measurementUnitCode": "MMT",
                              "#text": "72"
                            },
                            "tradeItemWeight": {
                              "drainedWeight": {
                                "-measurementUnitCode": "GRM",
                                "#text": "480"
                              },
                              "grossWeight": {
                                "-measurementUnitCode": "GRM",
                                "#text": "1506"
                              },
                              "netWeight": {
                                "-measurementUnitCode": "GRM",
                                "#text": "1200"
                              }
                            },
                            "avpList": {
                              "compoundStringAVP": {
                                "-attributeName": "netContentStatement",
                                "-attributeCode": "de",
                                "-codeListNameCode": "LANGUAGE_CODE",
                                "#text": "6 x 200 Gramm"
                              }
                            }
                          }
                        },
                        "variable_trade_item_information:variableTradeItemInformationModule": {
                          "-xmlns:variable_trade_item_information": "urn:gs1:gdsn:variable_trade_item_information:xsd:3",
                          "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                          "-xsi:schemaLocation": "urn:gs1:gdsn:variable_trade_item_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/VariableTradeItemInformationModule.xsd",
                          "variableTradeItemInformation": { "isTradeItemAVariableUnit": "false" }
                        }
                      }
                    },
                    "tradeItemSynchronisationDates": {
                      "lastChangeDateTime": "2016-12-23T23:49:17",
                      "effectiveDateTime": "2016-12-24T00:00:00+00:00"
                    }
                  },
                  "catalogueItemChildItemLink": {
                    "quantity": "6",
                    "catalogueItem": {
                      "catalogueItemState": { "catalogueItemStateCode": "REGISTERED" },
                      "tradeItem": {
                        "gtin": "04260394015424",
                        "additionalTradeItemIdentification": {
                          "-additionalTradeItemIdentificationTypeCode": "SUPPLIER_ASSIGNED",
                          "#text": "4260394015424"
                        },
                        "isTradeItemABaseUnit": "true",
                        "isTradeItemAConsumerUnit": "true",
                        "isTradeItemADespatchUnit": "false",
                        "isTradeItemAnInvoiceUnit": "false",
                        "isTradeItemAnOrderableUnit": "false",
                        "tradeItemUnitDescriptorCode": "BASE_UNIT_OR_EACH",
                        "tradeItemTradeChannelCode": "GROCERY",
                        "informationProviderOfTradeItem": {
                          "gln": "4260394010009",
                          "partyName": "Jean Jartin UG"
                        },
                        "manufacturerOfTradeItem": {
                          "gln": "4260394010009",
                          "partyAddress": "Avenida Neptuno 4507180 El ToroEspaña ",
                          "partyName": "Jean Jartin S.L."
                        },
                        "gdsnTradeItemClassification": {
                          "gpcCategoryCode": "10000003",
                          "gpcCategoryDefinition": "Fruit - Unprepared/Unprocessed (Shelf Stable)",
                          "gpcCategoryName": "Fruit - Unprepared/Unprocessed (Shelf Stable)",
                          "gDSNTradeItemClassificationAttribute": [
                            {
                              "gpcAttributeTypeCode": "20000352",
                              "gpcAttributeValueCode": "30002772",
                              "gpcAttributeTypeName": "Formation",
                              "gpcAttributeValueName": "WHOLE"
                            },
                            {
                              "gpcAttributeTypeCode": "20000142",
                              "gpcAttributeValueCode": "30002960",
                              "gpcAttributeTypeName": "If Organic",
                              "gpcAttributeValueName": "NO"
                            },
                            {
                              "gpcAttributeTypeCode": "20000109",
                              "gpcAttributeValueCode": "30002654",
                              "gpcAttributeTypeName": "If Pitted/Stoned",
                              "gpcAttributeValueName": "YES"
                            },
                            {
                              "gpcAttributeTypeCode": "20000076",
                              "gpcAttributeValueCode": "30002515",
                              "gpcAttributeTypeName": "Type of Fruit",
                              "gpcAttributeValueName": "UNCLASSIFIED"
                            }
                          ]
                        },
                        "targetMarket": { "targetMarketCountryCode": "276" },
                        "tradeItemContactInformation": [
                          {
                            "contactTypeCode": "CXC",
                            "targetMarketCommunicationChannel": {
                              "communicationChannel": {
                                "communicationChannelCode": "EMAIL",
                                "communicationValue": "info@oliva-del-sol.de"
                              }
                            }
                          },
                          {
                            "contactTypeCode": "BZL",
                            "contactAddress": "Avenida Neptuno 45  07180 El ToroEspaña ",
                            "contactName": "Jean Jartin S.L."
                          }
                        ],
                        "tradeItemInformation": {
                          "extension": {
                            "consumer_instructions:consumerInstructionsModule": {
                              "-xmlns:consumer_instructions": "urn:gs1:gdsn:consumer_instructions:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:consumer_instructions:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/ConsumerInstructionsModule.xsd",
                              "consumerInstructions": {
                                "consumerStorageInstructions": {
                                  "-languageCode": "de",
                                  "#text": "Bitte nach dem Öffnen kühl lagern."
                                }
                              }
                            },
                            "delivery_purchasing_information:deliveryPurchasingInformationModule": {
                              "-xmlns:delivery_purchasing_information": "urn:gs1:gdsn:delivery_purchasing_information:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:delivery_purchasing_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/DeliveryPurchasingInformationModule.xsd",
                              "deliveryPurchasingInformation": { "startAvailabilityDateTime": "2016-10-14T00:00:00+00:00" }
                            },
                            "duty_fee_tax_information:dutyFeeTaxInformationModule": {
                              "-xmlns:duty_fee_tax_information": "urn:gs1:gdsn:duty_fee_tax_information:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:duty_fee_tax_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/DutyFeeTaxInformationModule.xsd",
                              "dutyFeeTaxInformation": {
                                "dutyFeeTaxAgencyCode": "246",
                                "dutyFeeTaxTypeCode": "VAT",
                                "isTradeItemACombinationItem": "FALSE",
                                "dutyFeeTax": { "dutyFeeTaxCategoryCode": "LOW" }
                              }
                            },
                            "food_and_beverage_ingredient:foodAndBeverageIngredientModule": {
                              "-xmlns:food_and_beverage_ingredient": "urn:gs1:gdsn:food_and_beverage_ingredient:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:food_and_beverage_ingredient:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/FoodAndBeverageIngredientModule.xsd",
                              "ingredientStatement": {
                                "-languageCode": "de",
                                "#text": "Zutaten: Grüne Manzanilla-Oliven mit Kern, Wasser, Salz; Säureregulatoren: Milchsäure, Citronensäure; Konservierungsstoff: Natriumbenzoat. Pasteurisiert."
                              },
                              "additiveInformation": [
                                {
                                  "additiveName": "PRESERVATIVE",
                                  "levelOfContainmentCode": "CONTAINS"
                                },
                                {
                                  "additiveName": "ACID",
                                  "levelOfContainmentCode": "CONTAINS"
                                },
                                {
                                  "additiveName": "E211",
                                  "levelOfContainmentCode": "CONTAINS"
                                },
                                {
                                  "additiveName": "E270",
                                  "levelOfContainmentCode": "CONTAINS"
                                },
                                {
                                  "additiveName": "E300",
                                  "levelOfContainmentCode": "CONTAINS"
                                }
                              ]
                            },
                            "health_related_information:healthRelatedInformationModule": {
                              "-xmlns:health_related_information": "urn:gs1:gdsn:health_related_information:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:health_related_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/HealthRelatedInformationModule.xsd",
                              "healthRelatedInformation": {
                                "healthClaimDescription": {
                                  "-languageCode": "de",
                                  "#text": "Von Natur aus mit einem hohen Gehalt an: -ungesättigten Omega-9 Fettsäuren-Ballaststoffen-Vitamin E"
                                }
                              }
                            },
                            "health_wellness_packaging_marking:healthWellnessPackagingMarkingModule": {
                              "-xmlns:health_wellness_packaging_marking": "urn:gs1:gdsn:health_wellness_packaging_marking:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:health_wellness_packaging_marking:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/HealthWellnessPackagingMarkingModule.xsd",
                              "healthWellnessPackagingMarking": {
                                "isPackagingMarkedWithIngredients": "true",
                                "packagingMarkedDietAllergenCode": "CALORIES_PER_PORTION"
                              }
                            },
                            "nutritional_information:nutritionalInformationModule": {
                              "-xmlns:nutritional_information": "urn:gs1:gdsn:nutritional_information:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:nutritional_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/NutritionalInformationModule.xsd",
                              "nutritionalClaimDetail": [
                                {
                                  "nutritionalClaimTypeCode": "NATURAL_SOURCE_OF",
                                  "nutritionalClaimNutrientElementCode": "VITAMIN_E"
                                },
                                {
                                  "nutritionalClaimTypeCode": "HIGH",
                                  "nutritionalClaimNutrientElementCode": "UNSATURATED_FAT"
                                },
                                {
                                  "nutritionalClaimTypeCode": "HIGH",
                                  "nutritionalClaimNutrientElementCode": "FIBRE"
                                }
                              ],
                              "nutrientHeader": {
                                "preparationStateCode": "UNPREPARED",
                                "nutrientBasisQuantity": {
                                  "-measurementUnitCode": "GRM",
                                  "#text": "100"
                                },
                                "nutrientDetail": [
                                  {
                                    "nutrientTypeCode": "ENER-",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": [
                                      {
                                        "-measurementUnitCode": "E14",
                                        "#text": "154"
                                      },
                                      {
                                        "-measurementUnitCode": "KJO",
                                        "#text": "645"
                                      }
                                    ]
                                  },
                                  {
                                    "nutrientTypeCode": "FAT",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": {
                                      "-measurementUnitCode": "GRM",
                                      "#text": "16.3"
                                    }
                                  },
                                  {
                                    "nutrientTypeCode": "FASAT",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": {
                                      "-measurementUnitCode": "GRM",
                                      "#text": "3.23"
                                    }
                                  },
                                  {
                                    "nutrientTypeCode": "FAMSCIS",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": {
                                      "-measurementUnitCode": "GRM",
                                      "#text": "11.67"
                                    }
                                  },
                                  {
                                    "nutrientTypeCode": "FAPUCIS",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": {
                                      "-measurementUnitCode": "GRM",
                                      "#text": "1.4"
                                    }
                                  },
                                  {
                                    "nutrientTypeCode": "CHOAVL",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": {
                                      "-measurementUnitCode": "GRM",
                                      "#text": "0"
                                    }
                                  },
                                  {
                                    "nutrientTypeCode": "SUGAR-",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": {
                                      "-measurementUnitCode": "GRM",
                                      "#text": "0"
                                    }
                                  },
                                  {
                                    "nutrientTypeCode": "FIBTG",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": {
                                      "-measurementUnitCode": "GRM",
                                      "#text": "2.6"
                                    }
                                  },
                                  {
                                    "nutrientTypeCode": "PRO-",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": {
                                      "-measurementUnitCode": "GRM",
                                      "#text": "1.1"
                                    }
                                  },
                                  {
                                    "nutrientTypeCode": "SALTEQ",
                                    "measurementPrecisionCode": "APPROXIMATELY",
                                    "quantityContained": {
                                      "-measurementUnitCode": "GRM",
                                      "#text": "3.14"
                                    }
                                  }
                                ]
                              }
                            },
                            "packaging_information:packagingInformationModule": {
                              "-xmlns:packaging_information": "urn:gs1:gdsn:packaging_information:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:packaging_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/PackagingInformationModule.xsd",
                              "packaging": {
                                "isRadioFrequencyIDOnPackaging": "false",
                                "packagingLevel": "1",
                                "packagingTypeCode": "CNG",
                                "packagingMaterial": { "packagingMaterialTypeCode": "PAPER_PAPERBOARD" }
                              }
                            },
                            "packaging_marking:packagingMarkingModule": {
                              "-xmlns:packaging_marking": "urn:gs1:gdsn:packaging_marking:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:packaging_marking:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/PackagingMarkingModule.xsd",
                              "packagingMarking": {
                                "hasBatchNumber": "true",
                                "isPackagingMarkedReturnable": "true",
                                "packagingDate": { "tradeItemDateOnPackagingTypeCode": "BEST_BEFORE_DATE" }
                              }
                            },
                            "place_of_item_activity:placeOfItemActivityModule": {
                              "-xmlns:place_of_item_activity": "urn:gs1:gdsn:place_of_item_activity:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:place_of_item_activity:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/PlaceOfItemActivityModule.xsd",
                              "placeOfProductActivity": {
                                "countryOfOrigin": { "countryCode": "724" },
                                "productActivityDetails": {
                                  "productActivityTypeCode": "LAST_PROCESSING",
                                  "countryOfActivity": { "countryCode": "724" }
                                }
                              }
                            },
                            "regulated_trade_item:regulatedTradeItemModule": {
                              "-xmlns:regulated_trade_item": "urn:gs1:gdsn:regulated_trade_item:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:regulated_trade_item:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/RegulatedTradeItemModule.xsd",
                              "regulatoryInformation": [
                                {
                                  "regulatoryAct": "GHS",
                                  "regulatoryAgency": "UN",
                                  "permitIdentification": { "regulatoryPermitIdentification": "FALSE" }
                                },
                                {
                                  "regulatoryAct": "BMLV_PRODUCTRANGE",
                                  "regulatoryAgency": "BMLV",
                                  "permitIdentification": { "regulatoryPermitIdentification": "11" }
                                },
                                {
                                  "regulationTypeCode": "BIOCIDE_REGULATION",
                                  "avpList": {
                                    "stringAVP": {
                                      "-attributeName": "isTradeItemRegulationCompliant",
                                      "#text": "NOT_APPLICABLE"
                                    }
                                  }
                                }
                              ]
                            },
                            "sales_information:salesInformationModule": {
                              "-xmlns:sales_information": "urn:gs1:gdsn:sales_information:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:sales_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/SalesInformationModule.xsd",
                              "salesInformation": {
                                "isBasePriceDeclarationRelevant": "TRUE",
                                "priceComparisonMeasurement": {
                                  "-measurementUnitCode": "GRM",
                                  "#text": "80"
                                }
                              }
                            },
                            "trade_item_data_carrier_and_identification:tradeItemDataCarrierAndIdentificationModule": {
                              "-xmlns:trade_item_data_carrier_and_identification": "urn:gs1:gdsn:trade_item_data_carrier_and_identification:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_data_carrier_and_identification:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemDataCarrierAndIdentificationModule.xsd",
                              "dataCarrier": { "dataCarrierTypeCode": "EAN_13" }
                            },
                            "trade_item_description:tradeItemDescriptionModule": {
                              "-xmlns:trade_item_description": "urn:gs1:gdsn:trade_item_description:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_description:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemDescriptionModule.xsd",
                              "tradeItemDescriptionInformation": {
                                "additionalTradeItemDescription": {
                                  "-languageCode": "de",
                                  "#text": "# Olivas Sevillanas - Die Königin unter den Oliven! Aufgrund ihres ausgezeichneten Geschmacks ist die Manzanilla die beliebteste Speiseolive der Welt. Der traditionelle Ursprungsort dieser Sorte ist das Dorf “Dos Hermanas” in Sevilla. Nur die Steinfrüchte höchster Handelsklasse gipfeln in der Auswahl unserer Manzanilla Sevillana. Für Freunde des Originals! Jean Jartin´s Feinschmecker-Tipp: Nach Wunsch noch mit frischer (!) Petersilie, Knoblauchgranulat (sandkorngroß) und Rosmarien toppen. "
                                },
                                "descriptionShort": {
                                  "-languageCode": "de",
                                  "#text": "# OLIVAS Sevillanas"
                                },
                                "functionalName": {
                                  "-languageCode": "de",
                                  "#text": "Oliven"
                                },
                                "regulatedProductName": {
                                  "-languageCode": "de",
                                  "#text": "Sevillanische Manzanilla"
                                },
                                "tradeItemDescription": {
                                  "-languageCode": "de",
                                  "#text": "# OLIVAS Sevillanas - Milde Manzanilla Oliven aus Sevilla"
                                },
                                "brandNameInformation": {
                                  "brandName": "Jean Jartin Oliva-del-Sol®",
                                  "subBrand": "OLIVAS"
                                }
                              }
                            },
                            "trade_item_handling:tradeItemHandlingModule": {
                              "-xmlns:trade_item_handling": "urn:gs1:gdsn:trade_item_handling:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_handling:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemHandlingModule.xsd",
                              "tradeItemHandlingInformation": { "handlingInstructionsCodeReference": "3" }
                            },
                            "trade_item_lifespan:tradeItemLifespanModule": {
                              "-xmlns:trade_item_lifespan": "urn:gs1:gdsn:trade_item_lifespan:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_lifespan:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemLifespanModule.xsd",
                              "tradeItemLifespan": {
                                "minimumTradeItemLifespanFromTimeOfArrival": "800",
                                "minimumTradeItemLifespanFromTimeOfProduction": "1000"
                              }
                            },
                            "trade_item_measurements:tradeItemMeasurementsModule": {
                              "-xmlns:trade_item_measurements": "urn:gs1:gdsn:trade_item_measurements:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:trade_item_measurements:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TradeItemMeasurementsModule.xsd",
                              "tradeItemMeasurements": {
                                "depth": {
                                  "-measurementUnitCode": "MMT",
                                  "#text": "67"
                                },
                                "height": {
                                  "-measurementUnitCode": "MMT",
                                  "#text": "73"
                                },
                                "netContent": {
                                  "-measurementUnitCode": "GRM",
                                  "#text": "200"
                                },
                                "width": {
                                  "-measurementUnitCode": "MMT",
                                  "#text": "67"
                                },
                                "additionalTradeItemDimensions": {
                                  "depth": {
                                    "-measurementUnitCode": "MMT",
                                    "#text": "405"
                                  },
                                  "dimensionTypeCode": "DISPLAY_ITEM_STANDING_ON_SHELF",
                                  "height": {
                                    "-measurementUnitCode": "MMT",
                                    "#text": "230"
                                  },
                                  "width": {
                                    "-measurementUnitCode": "MMT",
                                    "#text": "68"
                                  }
                                },
                                "tradeItemNesting": {
                                  "nestingDirectionCode": "VERTICAL",
                                  "nestingIncrement": {
                                    "-measurementUnitCode": "MMT",
                                    "#text": "70"
                                  },
                                  "nestingTypeCode": "NEGATIVE"
                                },
                                "tradeItemWeight": {
                                  "drainedWeight": {
                                    "-measurementUnitCode": "GRM",
                                    "#text": "80"
                                  },
                                  "grossWeight": {
                                    "-measurementUnitCode": "GRM",
                                    "#text": "251"
                                  },
                                  "netWeight": {
                                    "-measurementUnitCode": "GRM",
                                    "#text": "80"
                                  }
                                },
                                "avpList": {
                                  "compoundStringAVP": {
                                    "-attributeName": "netContentStatement",
                                    "-attributeCode": "de",
                                    "-codeListNameCode": "LANGUAGE_CODE",
                                    "#text": "200 Gramm"
                                  }
                                }
                              }
                            },
                            "transportation_hazardous_classification:transportationHazardousClassificationModule": {
                              "-xmlns:transportation_hazardous_classification": "urn:gs1:gdsn:transportation_hazardous_classification:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:transportation_hazardous_classification:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/TransportationHazardousClassificationModule.xsd",
                              "transportationClassification": {
                                "regulatedTransportationMode": {
                                  "hazardousInformationHeader": {
                                    "dangerousGoodsRegulationAgency": "ADR",
                                    "dangerousGoodsRegulationCode": "ZNA"
                                  }
                                }
                              }
                            },
                            "variable_trade_item_information:variableTradeItemInformationModule": {
                              "-xmlns:variable_trade_item_information": "urn:gs1:gdsn:variable_trade_item_information:xsd:3",
                              "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                              "-xsi:schemaLocation": "urn:gs1:gdsn:variable_trade_item_information:xsd:3 http://www.gdsregistry.org/3.1/schemas/gs1/gdsn/VariableTradeItemInformationModule.xsd",
                              "variableTradeItemInformation": { "isTradeItemAVariableUnit": "false" }
                            }
                          }
                        },
                        "tradeItemSynchronisationDates": {
                          "lastChangeDateTime": "2016-11-19T00:27:27",
                          "effectiveDateTime": "2016-10-14T00:00:00+00:00"
                        },
                        "avpList": {
                          "stringAVP": [
                            {
                              "-attributeName": "tradeItemKeyWords",
                              "#text": "original Oliven Spanien sevillanas manzanilla"
                            },
                            {
                              "-attributeName": "packageDateReasonType",
                              "#text": "REGULATORY_COMPLIANCE"
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  for (i = 0; i < 100000; i++) { 
null;
};

