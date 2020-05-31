export const metadata = {
  "edmx:Edmx": {
    "$": {
      "Version": "1.0",
      "xmlns:edmx": "http://schemas.microsoft.com/ado/2007/06/edmx"
    },
    "edmx:DataServices": [
      {
        "$": {
          "m:DataServiceVersion": "1.0",
          "m:MaxDataServiceVersion": "3.0",
          "xmlns:m": "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata"
        },
        "Schema": [
          {
            "$": {
              "Namespace": "NorthwindModel",
              "xmlns": "http://schemas.microsoft.com/ado/2008/09/edm"
            },
            "EntityType": [
              {
                "$": {
                  "Name": "Category",
                  "sap:label": "Products category"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CategoryID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "CategoryID",
                      "Type": "Edm.Int32",
                      "Nullable": "false",
                      "p6:StoreGeneratedPattern": "Identity",
                      "xmlns:p6": "http://schemas.microsoft.com/ado/2009/02/edm/annotation",
					  "sap:label": "Category identifier"
                    }
                  },
                  {
                    "$": {
                      "Name": "CategoryName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Description",
                      "Type": "Edm.String",
                      "MaxLength": "Max",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Picture",
                      "Type": "Edm.Binary",
                      "MaxLength": "Max",
                      "FixedLength": "false"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Products",
                      "Relationship": "NorthwindModel.FK_Products_Categories",
                      "ToRole": "Products",
                      "FromRole": "Categories",
					  "sap:label": "Related products"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "CustomerDemographic"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CustomerTypeID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "CustomerTypeID",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "10",
                      "FixedLength": "true",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "CustomerDesc",
                      "Type": "Edm.String",
                      "MaxLength": "Max",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Customers",
                      "Relationship": "NorthwindModel.CustomerCustomerDemo",
                      "ToRole": "Customers",
                      "FromRole": "CustomerDemographics"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Customer"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CustomerID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "CustomerID",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "5",
                      "FixedLength": "true",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "CompanyName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ContactName",
                      "Type": "Edm.String",
                      "MaxLength": "30",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ContactTitle",
                      "Type": "Edm.String",
                      "MaxLength": "30",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Address",
                      "Type": "Edm.String",
                      "MaxLength": "60",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "City",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Region",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "PostalCode",
                      "Type": "Edm.String",
                      "MaxLength": "10",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Country",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Phone",
                      "Type": "Edm.String",
                      "MaxLength": "24",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Fax",
                      "Type": "Edm.String",
                      "MaxLength": "24",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Orders",
                      "Relationship": "NorthwindModel.FK_Orders_Customers",
                      "ToRole": "Orders",
                      "FromRole": "Customers"
                    }
                  },
                  {
                    "$": {
                      "Name": "CustomerDemographics",
                      "Relationship": "NorthwindModel.CustomerCustomerDemo",
                      "ToRole": "CustomerDemographics",
                      "FromRole": "Customers"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Employee"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "EmployeeID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "EmployeeID",
                      "Type": "Edm.Int32",
                      "Nullable": "false",
                      "p6:StoreGeneratedPattern": "Identity",
                      "xmlns:p6": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
                    }
                  },
                  {
                    "$": {
                      "Name": "LastName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "20",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "FirstName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "10",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Title",
                      "Type": "Edm.String",
                      "MaxLength": "30",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "TitleOfCourtesy",
                      "Type": "Edm.String",
                      "MaxLength": "25",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "BirthDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "HireDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "Address",
                      "Type": "Edm.String",
                      "MaxLength": "60",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "City",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Region",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "PostalCode",
                      "Type": "Edm.String",
                      "MaxLength": "10",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Country",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "HomePhone",
                      "Type": "Edm.String",
                      "MaxLength": "24",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Extension",
                      "Type": "Edm.String",
                      "MaxLength": "4",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Photo",
                      "Type": "Edm.Binary",
                      "MaxLength": "Max",
                      "FixedLength": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "Notes",
                      "Type": "Edm.String",
                      "MaxLength": "Max",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ReportsTo",
                      "Type": "Edm.Int32"
                    }
                  },
                  {
                    "$": {
                      "Name": "PhotoPath",
                      "Type": "Edm.String",
                      "MaxLength": "255",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Employees1",
                      "Relationship": "NorthwindModel.FK_Employees_Employees",
                      "ToRole": "Employees1",
                      "FromRole": "Employees"
                    }
                  },
                  {
                    "$": {
                      "Name": "Employee1",
                      "Relationship": "NorthwindModel.FK_Employees_Employees",
                      "ToRole": "Employees",
                      "FromRole": "Employees1"
                    }
                  },
                  {
                    "$": {
                      "Name": "Orders",
                      "Relationship": "NorthwindModel.FK_Orders_Employees",
                      "ToRole": "Orders",
                      "FromRole": "Employees"
                    }
                  },
                  {
                    "$": {
                      "Name": "Territories",
                      "Relationship": "NorthwindModel.EmployeeTerritories",
                      "ToRole": "Territories",
                      "FromRole": "Employees"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Order_Detail"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "OrderID"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "OrderID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitPrice",
                      "Type": "Edm.Decimal",
                      "Nullable": "false",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  },
                  {
                    "$": {
                      "Name": "Quantity",
                      "Type": "Edm.Int16",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "Discount",
                      "Type": "Edm.Single",
                      "Nullable": "false"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Order",
                      "Relationship": "NorthwindModel.FK_Order_Details_Orders",
                      "ToRole": "Orders",
                      "FromRole": "Order_Details"
                    }
                  },
                  {
                    "$": {
                      "Name": "Product",
                      "Relationship": "NorthwindModel.FK_Order_Details_Products",
                      "ToRole": "Products",
                      "FromRole": "Order_Details"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Order"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "OrderID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "OrderID",
                      "Type": "Edm.Int32",
                      "Nullable": "false",
                      "p6:StoreGeneratedPattern": "Identity",
                      "xmlns:p6": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
                    }
                  },
                  {
                    "$": {
                      "Name": "CustomerID",
                      "Type": "Edm.String",
                      "MaxLength": "5",
                      "FixedLength": "true",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "EmployeeID",
                      "Type": "Edm.Int32"
                    }
                  },
                  {
                    "$": {
                      "Name": "OrderDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "RequiredDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShippedDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipVia",
                      "Type": "Edm.Int32"
                    }
                  },
                  {
                    "$": {
                      "Name": "Freight",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipName",
                      "Type": "Edm.String",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipAddress",
                      "Type": "Edm.String",
                      "MaxLength": "60",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipCity",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipRegion",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipPostalCode",
                      "Type": "Edm.String",
                      "MaxLength": "10",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipCountry",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Customer",
                      "Relationship": "NorthwindModel.FK_Orders_Customers",
                      "ToRole": "Customers",
                      "FromRole": "Orders"
                    }
                  },
                  {
                    "$": {
                      "Name": "Employee",
                      "Relationship": "NorthwindModel.FK_Orders_Employees",
                      "ToRole": "Employees",
                      "FromRole": "Orders"
                    }
                  },
                  {
                    "$": {
                      "Name": "Order_Details",
                      "Relationship": "NorthwindModel.FK_Order_Details_Orders",
                      "ToRole": "Order_Details",
                      "FromRole": "Orders"
                    }
                  },
                  {
                    "$": {
                      "Name": "Shipper",
                      "Relationship": "NorthwindModel.FK_Orders_Shippers",
                      "ToRole": "Shippers",
                      "FromRole": "Orders"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Product"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "ProductID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "ProductID",
                      "Type": "Edm.Int32",
                      "Nullable": "false",
                      "p6:StoreGeneratedPattern": "Identity",
                      "xmlns:p6": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "SupplierID",
                      "Type": "Edm.Int32"
                    }
                  },
                  {
                    "$": {
                      "Name": "CategoryID",
                      "Type": "Edm.Int32"
                    }
                  },
                  {
                    "$": {
                      "Name": "QuantityPerUnit",
                      "Type": "Edm.String",
                      "MaxLength": "20",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitPrice",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitsInStock",
                      "Type": "Edm.Int16"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitsOnOrder",
                      "Type": "Edm.Int16"
                    }
                  },
                  {
                    "$": {
                      "Name": "ReorderLevel",
                      "Type": "Edm.Int16"
                    }
                  },
                  {
                    "$": {
                      "Name": "Discontinued",
                      "Type": "Edm.Boolean",
                      "Nullable": "false"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Category",
                      "Relationship": "NorthwindModel.FK_Products_Categories",
                      "ToRole": "Categories",
                      "FromRole": "Products"
                    }
                  },
                  {
                    "$": {
                      "Name": "Order_Details",
                      "Relationship": "NorthwindModel.FK_Order_Details_Products",
                      "ToRole": "Order_Details",
                      "FromRole": "Products"
                    }
                  },
                  {
                    "$": {
                      "Name": "Supplier",
                      "Relationship": "NorthwindModel.FK_Products_Suppliers",
                      "ToRole": "Suppliers",
                      "FromRole": "Products"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Region"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "RegionID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "RegionID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "RegionDescription",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "50",
                      "FixedLength": "true",
                      "Unicode": "true"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Territories",
                      "Relationship": "NorthwindModel.FK_Territories_Region",
                      "ToRole": "Territories",
                      "FromRole": "Region"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Shipper"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "ShipperID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "ShipperID",
                      "Type": "Edm.Int32",
                      "Nullable": "false",
                      "p6:StoreGeneratedPattern": "Identity",
                      "xmlns:p6": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
                    }
                  },
                  {
                    "$": {
                      "Name": "CompanyName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Phone",
                      "Type": "Edm.String",
                      "MaxLength": "24",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Orders",
                      "Relationship": "NorthwindModel.FK_Orders_Shippers",
                      "ToRole": "Orders",
                      "FromRole": "Shippers"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Supplier"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "SupplierID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "SupplierID",
                      "Type": "Edm.Int32",
                      "Nullable": "false",
                      "p6:StoreGeneratedPattern": "Identity",
                      "xmlns:p6": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
                    }
                  },
                  {
                    "$": {
                      "Name": "CompanyName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ContactName",
                      "Type": "Edm.String",
                      "MaxLength": "30",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ContactTitle",
                      "Type": "Edm.String",
                      "MaxLength": "30",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Address",
                      "Type": "Edm.String",
                      "MaxLength": "60",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "City",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Region",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "PostalCode",
                      "Type": "Edm.String",
                      "MaxLength": "10",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Country",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Phone",
                      "Type": "Edm.String",
                      "MaxLength": "24",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Fax",
                      "Type": "Edm.String",
                      "MaxLength": "24",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "HomePage",
                      "Type": "Edm.String",
                      "MaxLength": "Max",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Products",
                      "Relationship": "NorthwindModel.FK_Products_Suppliers",
                      "ToRole": "Products",
                      "FromRole": "Suppliers"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Territory"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "TerritoryID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "TerritoryID",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "20",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "TerritoryDescription",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "50",
                      "FixedLength": "true",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "RegionID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  }
                ],
                "NavigationProperty": [
                  {
                    "$": {
                      "Name": "Region",
                      "Relationship": "NorthwindModel.FK_Territories_Region",
                      "ToRole": "Region",
                      "FromRole": "Territories"
                    }
                  },
                  {
                    "$": {
                      "Name": "Employees",
                      "Relationship": "NorthwindModel.EmployeeTerritories",
                      "ToRole": "Employees",
                      "FromRole": "Territories"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Alphabetical_list_of_product"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CategoryName"
                        }
                      },
                      {
                        "$": {
                          "Name": "Discontinued"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductID"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductName"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "ProductID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "SupplierID",
                      "Type": "Edm.Int32"
                    }
                  },
                  {
                    "$": {
                      "Name": "CategoryID",
                      "Type": "Edm.Int32"
                    }
                  },
                  {
                    "$": {
                      "Name": "QuantityPerUnit",
                      "Type": "Edm.String",
                      "MaxLength": "20",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitPrice",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitsInStock",
                      "Type": "Edm.Int16"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitsOnOrder",
                      "Type": "Edm.Int16"
                    }
                  },
                  {
                    "$": {
                      "Name": "ReorderLevel",
                      "Type": "Edm.Int16"
                    }
                  },
                  {
                    "$": {
                      "Name": "Discontinued",
                      "Type": "Edm.Boolean",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "CategoryName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Category_Sales_for_1997"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CategoryName"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "CategoryName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "CategorySales",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Current_Product_List"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "ProductID"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductName"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "ProductID",
                      "Type": "Edm.Int32",
                      "Nullable": "false",
                      "p6:StoreGeneratedPattern": "Identity",
                      "xmlns:p6": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Customer_and_Suppliers_by_City"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CompanyName"
                        }
                      },
                      {
                        "$": {
                          "Name": "Relationship"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "City",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "CompanyName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ContactName",
                      "Type": "Edm.String",
                      "MaxLength": "30",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Relationship",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "9",
                      "FixedLength": "false",
                      "Unicode": "false"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Invoice"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CustomerName"
                        }
                      },
                      {
                        "$": {
                          "Name": "Discount"
                        }
                      },
                      {
                        "$": {
                          "Name": "OrderID"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductID"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductName"
                        }
                      },
                      {
                        "$": {
                          "Name": "Quantity"
                        }
                      },
                      {
                        "$": {
                          "Name": "Salesperson"
                        }
                      },
                      {
                        "$": {
                          "Name": "ShipperName"
                        }
                      },
                      {
                        "$": {
                          "Name": "UnitPrice"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "ShipName",
                      "Type": "Edm.String",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipAddress",
                      "Type": "Edm.String",
                      "MaxLength": "60",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipCity",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipRegion",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipPostalCode",
                      "Type": "Edm.String",
                      "MaxLength": "10",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipCountry",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "CustomerID",
                      "Type": "Edm.String",
                      "MaxLength": "5",
                      "FixedLength": "true",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "CustomerName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Address",
                      "Type": "Edm.String",
                      "MaxLength": "60",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "City",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Region",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "PostalCode",
                      "Type": "Edm.String",
                      "MaxLength": "10",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Country",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Salesperson",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "31",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "OrderID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "OrderDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "RequiredDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShippedDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipperName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitPrice",
                      "Type": "Edm.Decimal",
                      "Nullable": "false",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  },
                  {
                    "$": {
                      "Name": "Quantity",
                      "Type": "Edm.Int16",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "Discount",
                      "Type": "Edm.Single",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "ExtendedPrice",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  },
                  {
                    "$": {
                      "Name": "Freight",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Order_Details_Extended"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "Discount"
                        }
                      },
                      {
                        "$": {
                          "Name": "OrderID"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductID"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductName"
                        }
                      },
                      {
                        "$": {
                          "Name": "Quantity"
                        }
                      },
                      {
                        "$": {
                          "Name": "UnitPrice"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "OrderID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitPrice",
                      "Type": "Edm.Decimal",
                      "Nullable": "false",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  },
                  {
                    "$": {
                      "Name": "Quantity",
                      "Type": "Edm.Int16",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "Discount",
                      "Type": "Edm.Single",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "ExtendedPrice",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Order_Subtotal"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "OrderID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "OrderID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "Subtotal",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Orders_Qry"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CompanyName"
                        }
                      },
                      {
                        "$": {
                          "Name": "OrderID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "OrderID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "CustomerID",
                      "Type": "Edm.String",
                      "MaxLength": "5",
                      "FixedLength": "true",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "EmployeeID",
                      "Type": "Edm.Int32"
                    }
                  },
                  {
                    "$": {
                      "Name": "OrderDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "RequiredDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShippedDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipVia",
                      "Type": "Edm.Int32"
                    }
                  },
                  {
                    "$": {
                      "Name": "Freight",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipName",
                      "Type": "Edm.String",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipAddress",
                      "Type": "Edm.String",
                      "MaxLength": "60",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipCity",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipRegion",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipPostalCode",
                      "Type": "Edm.String",
                      "MaxLength": "10",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShipCountry",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "CompanyName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Address",
                      "Type": "Edm.String",
                      "MaxLength": "60",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "City",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Region",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "PostalCode",
                      "Type": "Edm.String",
                      "MaxLength": "10",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "Country",
                      "Type": "Edm.String",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Product_Sales_for_1997"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CategoryName"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductName"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "CategoryName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductSales",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Products_Above_Average_Price"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "ProductName"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "ProductName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitPrice",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Products_by_Category"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CategoryName"
                        }
                      },
                      {
                        "$": {
                          "Name": "Discontinued"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductName"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "CategoryName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "QuantityPerUnit",
                      "Type": "Edm.String",
                      "MaxLength": "20",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "UnitsInStock",
                      "Type": "Edm.Int16"
                    }
                  },
                  {
                    "$": {
                      "Name": "Discontinued",
                      "Type": "Edm.Boolean",
                      "Nullable": "false"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Sales_by_Category"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CategoryID"
                        }
                      },
                      {
                        "$": {
                          "Name": "CategoryName"
                        }
                      },
                      {
                        "$": {
                          "Name": "ProductName"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "CategoryID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "CategoryName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "15",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ProductSales",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Sales_Totals_by_Amount"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "CompanyName"
                        }
                      },
                      {
                        "$": {
                          "Name": "OrderID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "SaleAmount",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  },
                  {
                    "$": {
                      "Name": "OrderID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "CompanyName",
                      "Type": "Edm.String",
                      "Nullable": "false",
                      "MaxLength": "40",
                      "FixedLength": "false",
                      "Unicode": "true"
                    }
                  },
                  {
                    "$": {
                      "Name": "ShippedDate",
                      "Type": "Edm.DateTime"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Summary_of_Sales_by_Quarter"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "OrderID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "ShippedDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "OrderID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "Subtotal",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "Summary_of_Sales_by_Year"
                },
                "Key": [
                  {
                    "PropertyRef": [
                      {
                        "$": {
                          "Name": "OrderID"
                        }
                      }
                    ]
                  }
                ],
                "Property": [
                  {
                    "$": {
                      "Name": "ShippedDate",
                      "Type": "Edm.DateTime"
                    }
                  },
                  {
                    "$": {
                      "Name": "OrderID",
                      "Type": "Edm.Int32",
                      "Nullable": "false"
                    }
                  },
                  {
                    "$": {
                      "Name": "Subtotal",
                      "Type": "Edm.Decimal",
                      "Precision": "19",
                      "Scale": "4"
                    }
                  }
                ]
              }
            ],
            "Association": [
              {
                "$": {
                  "Name": "FK_Products_Categories"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Category",
                      "Role": "Categories",
                      "Multiplicity": "0..1"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Product",
                      "Role": "Products",
                      "Multiplicity": "*"
                    }
                  }
                ],
                "ReferentialConstraint": [
                  {
                    "Principal": [
                      {
                        "$": {
                          "Role": "Categories"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "CategoryID"
                            }
                          }
                        ]
                      }
                    ],
                    "Dependent": [
                      {
                        "$": {
                          "Role": "Products"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "CategoryID"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "Name": "CustomerCustomerDemo"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Customer",
                      "Role": "Customers",
                      "Multiplicity": "*"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.CustomerDemographic",
                      "Role": "CustomerDemographics",
                      "Multiplicity": "*"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "FK_Orders_Customers"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Customer",
                      "Role": "Customers",
                      "Multiplicity": "0..1"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Order",
                      "Role": "Orders",
                      "Multiplicity": "*"
                    }
                  }
                ],
                "ReferentialConstraint": [
                  {
                    "Principal": [
                      {
                        "$": {
                          "Role": "Customers"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "CustomerID"
                            }
                          }
                        ]
                      }
                    ],
                    "Dependent": [
                      {
                        "$": {
                          "Role": "Orders"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "CustomerID"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "Name": "FK_Employees_Employees"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Employee",
                      "Role": "Employees",
                      "Multiplicity": "0..1"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Employee",
                      "Role": "Employees1",
                      "Multiplicity": "*"
                    }
                  }
                ],
                "ReferentialConstraint": [
                  {
                    "Principal": [
                      {
                        "$": {
                          "Role": "Employees"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "EmployeeID"
                            }
                          }
                        ]
                      }
                    ],
                    "Dependent": [
                      {
                        "$": {
                          "Role": "Employees1"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "ReportsTo"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "Name": "FK_Orders_Employees"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Employee",
                      "Role": "Employees",
                      "Multiplicity": "0..1"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Order",
                      "Role": "Orders",
                      "Multiplicity": "*"
                    }
                  }
                ],
                "ReferentialConstraint": [
                  {
                    "Principal": [
                      {
                        "$": {
                          "Role": "Employees"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "EmployeeID"
                            }
                          }
                        ]
                      }
                    ],
                    "Dependent": [
                      {
                        "$": {
                          "Role": "Orders"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "EmployeeID"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "Name": "EmployeeTerritories"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Territory",
                      "Role": "Territories",
                      "Multiplicity": "*"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Employee",
                      "Role": "Employees",
                      "Multiplicity": "*"
                    }
                  }
                ]
              },
              {
                "$": {
                  "Name": "FK_Order_Details_Orders"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Order",
                      "Role": "Orders",
                      "Multiplicity": "1"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Order_Detail",
                      "Role": "Order_Details",
                      "Multiplicity": "*"
                    }
                  }
                ],
                "ReferentialConstraint": [
                  {
                    "Principal": [
                      {
                        "$": {
                          "Role": "Orders"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "OrderID"
                            }
                          }
                        ]
                      }
                    ],
                    "Dependent": [
                      {
                        "$": {
                          "Role": "Order_Details"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "OrderID"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "Name": "FK_Order_Details_Products"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Product",
                      "Role": "Products",
                      "Multiplicity": "1"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Order_Detail",
                      "Role": "Order_Details",
                      "Multiplicity": "*"
                    }
                  }
                ],
                "ReferentialConstraint": [
                  {
                    "Principal": [
                      {
                        "$": {
                          "Role": "Products"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "ProductID"
                            }
                          }
                        ]
                      }
                    ],
                    "Dependent": [
                      {
                        "$": {
                          "Role": "Order_Details"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "ProductID"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "Name": "FK_Orders_Shippers"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Shipper",
                      "Role": "Shippers",
                      "Multiplicity": "0..1"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Order",
                      "Role": "Orders",
                      "Multiplicity": "*"
                    }
                  }
                ],
                "ReferentialConstraint": [
                  {
                    "Principal": [
                      {
                        "$": {
                          "Role": "Shippers"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "ShipperID"
                            }
                          }
                        ]
                      }
                    ],
                    "Dependent": [
                      {
                        "$": {
                          "Role": "Orders"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "ShipVia"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "Name": "FK_Products_Suppliers"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Supplier",
                      "Role": "Suppliers",
                      "Multiplicity": "0..1"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Product",
                      "Role": "Products",
                      "Multiplicity": "*"
                    }
                  }
                ],
                "ReferentialConstraint": [
                  {
                    "Principal": [
                      {
                        "$": {
                          "Role": "Suppliers"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "SupplierID"
                            }
                          }
                        ]
                      }
                    ],
                    "Dependent": [
                      {
                        "$": {
                          "Role": "Products"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "SupplierID"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "Name": "FK_Territories_Region"
                },
                "End": [
                  {
                    "$": {
                      "Type": "NorthwindModel.Region",
                      "Role": "Region",
                      "Multiplicity": "1"
                    }
                  },
                  {
                    "$": {
                      "Type": "NorthwindModel.Territory",
                      "Role": "Territories",
                      "Multiplicity": "*"
                    }
                  }
                ],
                "ReferentialConstraint": [
                  {
                    "Principal": [
                      {
                        "$": {
                          "Role": "Region"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "RegionID"
                            }
                          }
                        ]
                      }
                    ],
                    "Dependent": [
                      {
                        "$": {
                          "Role": "Territories"
                        },
                        "PropertyRef": [
                          {
                            "$": {
                              "Name": "RegionID"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Namespace": "ODataWebV3.Northwind.Model",
              "xmlns": "http://schemas.microsoft.com/ado/2008/09/edm"
            },
            "EntityContainer": [
              {
                "$": {
                  "Name": "NorthwindEntities",
                  "m:IsDefaultEntityContainer": "true",
                  "p6:LazyLoadingEnabled": "true",
                  "xmlns:p6": "http://schemas.microsoft.com/ado/2009/02/edm/annotation"
                },
                "EntitySet": [
                  {
                    "$": {
                      "Name": "Categories",
                      "EntityType": "NorthwindModel.Category"
                    }
                  },
                  {
                    "$": {
                      "Name": "CustomerDemographics",
                      "EntityType": "NorthwindModel.CustomerDemographic"
                    }
                  },
                  {
                    "$": {
                      "Name": "Customers",
                      "EntityType": "NorthwindModel.Customer"
                    }
                  },
                  {
                    "$": {
                      "Name": "Employees",
                      "EntityType": "NorthwindModel.Employee"
                    }
                  },
                  {
                    "$": {
                      "Name": "Order_Details",
                      "EntityType": "NorthwindModel.Order_Detail"
                    }
                  },
                  {
                    "$": {
                      "Name": "Orders",
                      "EntityType": "NorthwindModel.Order"
                    }
                  },
                  {
                    "$": {
                      "Name": "Products",
                      "EntityType": "NorthwindModel.Product"
                    }
                  },
                  {
                    "$": {
                      "Name": "Regions",
                      "EntityType": "NorthwindModel.Region"
                    }
                  },
                  {
                    "$": {
                      "Name": "Shippers",
                      "EntityType": "NorthwindModel.Shipper"
                    }
                  },
                  {
                    "$": {
                      "Name": "Suppliers",
                      "EntityType": "NorthwindModel.Supplier"
                    }
                  },
                  {
                    "$": {
                      "Name": "Territories",
                      "EntityType": "NorthwindModel.Territory"
                    }
                  },
                  {
                    "$": {
                      "Name": "Alphabetical_list_of_products",
                      "EntityType": "NorthwindModel.Alphabetical_list_of_product"
                    }
                  },
                  {
                    "$": {
                      "Name": "Category_Sales_for_1997",
                      "EntityType": "NorthwindModel.Category_Sales_for_1997"
                    }
                  },
                  {
                    "$": {
                      "Name": "Current_Product_Lists",
                      "EntityType": "NorthwindModel.Current_Product_List"
                    }
                  },
                  {
                    "$": {
                      "Name": "Customer_and_Suppliers_by_Cities",
                      "EntityType": "NorthwindModel.Customer_and_Suppliers_by_City"
                    }
                  },
                  {
                    "$": {
                      "Name": "Invoices",
                      "EntityType": "NorthwindModel.Invoice"
                    }
                  },
                  {
                    "$": {
                      "Name": "Order_Details_Extendeds",
                      "EntityType": "NorthwindModel.Order_Details_Extended"
                    }
                  },
                  {
                    "$": {
                      "Name": "Order_Subtotals",
                      "EntityType": "NorthwindModel.Order_Subtotal"
                    }
                  },
                  {
                    "$": {
                      "Name": "Orders_Qries",
                      "EntityType": "NorthwindModel.Orders_Qry"
                    }
                  },
                  {
                    "$": {
                      "Name": "Product_Sales_for_1997",
                      "EntityType": "NorthwindModel.Product_Sales_for_1997"
                    }
                  },
                  {
                    "$": {
                      "Name": "Products_Above_Average_Prices",
                      "EntityType": "NorthwindModel.Products_Above_Average_Price"
                    }
                  },
                  {
                    "$": {
                      "Name": "Products_by_Categories",
                      "EntityType": "NorthwindModel.Products_by_Category"
                    }
                  },
                  {
                    "$": {
                      "Name": "Sales_by_Categories",
                      "EntityType": "NorthwindModel.Sales_by_Category"
                    }
                  },
                  {
                    "$": {
                      "Name": "Sales_Totals_by_Amounts",
                      "EntityType": "NorthwindModel.Sales_Totals_by_Amount"
                    }
                  },
                  {
                    "$": {
                      "Name": "Summary_of_Sales_by_Quarters",
                      "EntityType": "NorthwindModel.Summary_of_Sales_by_Quarter"
                    }
                  },
                  {
                    "$": {
                      "Name": "Summary_of_Sales_by_Years",
                      "EntityType": "NorthwindModel.Summary_of_Sales_by_Year"
                    }
                  }
                ],
                "AssociationSet": [
                  {
                    "$": {
                      "Name": "FK_Products_Categories",
                      "Association": "NorthwindModel.FK_Products_Categories"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Categories",
                          "EntitySet": "Categories"
                        }
                      },
                      {
                        "$": {
                          "Role": "Products",
                          "EntitySet": "Products"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "CustomerCustomerDemo",
                      "Association": "NorthwindModel.CustomerCustomerDemo"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "CustomerDemographics",
                          "EntitySet": "CustomerDemographics"
                        }
                      },
                      {
                        "$": {
                          "Role": "Customers",
                          "EntitySet": "Customers"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "FK_Orders_Customers",
                      "Association": "NorthwindModel.FK_Orders_Customers"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Customers",
                          "EntitySet": "Customers"
                        }
                      },
                      {
                        "$": {
                          "Role": "Orders",
                          "EntitySet": "Orders"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "FK_Employees_Employees",
                      "Association": "NorthwindModel.FK_Employees_Employees"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Employees",
                          "EntitySet": "Employees"
                        }
                      },
                      {
                        "$": {
                          "Role": "Employees1",
                          "EntitySet": "Employees"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "FK_Orders_Employees",
                      "Association": "NorthwindModel.FK_Orders_Employees"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Employees",
                          "EntitySet": "Employees"
                        }
                      },
                      {
                        "$": {
                          "Role": "Orders",
                          "EntitySet": "Orders"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "EmployeeTerritories",
                      "Association": "NorthwindModel.EmployeeTerritories"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Employees",
                          "EntitySet": "Employees"
                        }
                      },
                      {
                        "$": {
                          "Role": "Territories",
                          "EntitySet": "Territories"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "FK_Order_Details_Orders",
                      "Association": "NorthwindModel.FK_Order_Details_Orders"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Order_Details",
                          "EntitySet": "Order_Details"
                        }
                      },
                      {
                        "$": {
                          "Role": "Orders",
                          "EntitySet": "Orders"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "FK_Order_Details_Products",
                      "Association": "NorthwindModel.FK_Order_Details_Products"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Order_Details",
                          "EntitySet": "Order_Details"
                        }
                      },
                      {
                        "$": {
                          "Role": "Products",
                          "EntitySet": "Products"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "FK_Orders_Shippers",
                      "Association": "NorthwindModel.FK_Orders_Shippers"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Orders",
                          "EntitySet": "Orders"
                        }
                      },
                      {
                        "$": {
                          "Role": "Shippers",
                          "EntitySet": "Shippers"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "FK_Products_Suppliers",
                      "Association": "NorthwindModel.FK_Products_Suppliers"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Products",
                          "EntitySet": "Products"
                        }
                      },
                      {
                        "$": {
                          "Role": "Suppliers",
                          "EntitySet": "Suppliers"
                        }
                      }
                    ]
                  },
                  {
                    "$": {
                      "Name": "FK_Territories_Region",
                      "Association": "NorthwindModel.FK_Territories_Region"
                    },
                    "End": [
                      {
                        "$": {
                          "Role": "Region",
                          "EntitySet": "Regions"
                        }
                      },
                      {
                        "$": {
                          "Role": "Territories",
                          "EntitySet": "Territories"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}