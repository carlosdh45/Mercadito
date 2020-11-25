GO
USE mercadito;
GO

-- Create a new table called 'proveedores' in dbo 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.proveedores', 'U') IS NOT NULL
DROP TABLE dbo.proveedores
GO
-- Create the table in the specified schema
CREATE TABLE dbo.proveedores
(
    Id INT IDENTITY(1,1) NOT NULL , -- primary key column
    Nombre [NVARCHAR](50) NOT NULL,
    Producto [NVARCHAR](50) NOT NULL,
    Pago INT NOT NULL,
    CONSTRAINT pkID PRIMARY KEY (Id)
    -- specify more columns here
);
GO

IF OBJECT_ID('dbo.Pedido', 'U') IS NOT NULL
DROP TABLE dbo.Pedido
GO

CREATE TABLE dbo.Pedido
(
    id INT NOT NULL IDENTITY(1,1),
    idProveedor INT NOT NULL,
    FechaEntrega DATE NOT NULL,
    CostoTotal FLOAT NOT NULL,
    CONSTRAINT pkPedido PRIMARY KEY(id),

);
GO

INSERT INTO Pedido
(
 [idProveedor], [FechaEntrega], [CostoTotal]
)
VALUES
(
 1, '20201011', 1999.99
),
(
 2, '20201101', 2999.99
)
GO


-- Create a new table called '' in dbo 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.FechaEnvio', 'U') IS NOT NULL
DROP TABLE dbo.FechaEnvio
GO
-- Create the table in the specified schema
CREATE TABLE dbo.FechaEnvio
(
    ProveedorId [INT] IDENTITY(1,1) NOT NULL, -- primary key column
    Fecha [NVARCHAR](50) NOT NULL,
    CanCompra [INT] NOT NULL,
    OrdenCompra [NVARCHAR](50) NOT NULL,
    CONSTRAINT pk_proveedorId PRIMARY KEY(ProveedorId)
    -- specify more columns here
);
GO

IF OBJECT_ID('dbo.areaCedito', 'U') IS NOT NULL
DROP TABLE dbo.areaCredito
GO

CREATE TABLE dbo.areaCredito
(
    IdCliente [INT] IDENTITY(1,1) NOT NULL, -- primary key column
    Cantidad [INT] NOT NULL,
    Fecha [DATE] NOT NULL,
    CreditoAPB [INT] NOT NULL,
    CONSTRAINT pk_IdCliente PRIMARY KEY(IdCliente)
    -- specify more columns here
);
GO

IF OBJECT_ID('dbo.Cliente', 'U') IS NOT NULL
DROP TABLE dbo.Cliente
GO

CREATE TABLE dbo.Cliente
(
    id INT NOT NULL IDENTITY(1,1),
    Nombre [NVARCHAR](50) NOT NULL,
    Direccion [NVARCHAR](50) NOT NULL,
    Producto [NVARCHAR](50) NOT NULL,
    Telefono INT NOT NULL,
    Saldo INT NOT NULL,
    CONSTRAINT pkCliente PRIMARY KEY(id)
);
GO

IF OBJECT_ID('dbo.Factura', 'U') IS NOT NULL
DROP TABLE dbo.Factura
GO

CREATE TABLE dbo.Factura
(
    id [INT] NOT NULL IDENTITY(1,1),
    idCliente [INT] NOT NULL,
    Fecha [DATE] NOT NULL,
    ValorUnitario [INT] NOT NULL,
    Subtotal [INT] NOT NULL,
    ISV [INT] NOT NULL,
    Total [INT] NOT NULL,
    CONSTRAINT pkFactura PRIMARY KEY(id),
);
GO


-- Insert rows into table 'proveedores'
INSERT INTO proveedores
( -- columnNombresert data into
 [Nombre], [Producto], [Pago]
)
VALUES
(
 'Sula', 'Productos Lacteos', 1500
),
(
 'Pepsi', 'Refrescos', 500
),
(
 'Coca Cola','Refrescos', 800
),
(
 'Cafe Maya', 'Productos de Cafe', 300
),
(
 'Sula', 'Productos Lacteos', 1500
),
(
 'Yummies', 'Churros', 500
),
(
 'Mazola', 'Productos de cocina', 1500
),
(
 'Coca Cola', 'Refrescos', 500
),
(
 'Pollo norteño', 'Comestible', 500
-- add more rows here
),
(
 'OLD spice', 'Producto de higiene', 1500
)
GO

-- Insert rows into table 'FechaEnvio'
INSERT INTO FechaEnvio
( -- columns to insert data into
 [Fecha], [CanCompra] , [OrdenCompra]
)
VALUES
( -- first row: values for the columns in the list above
  '11/20/2020', 50, 'Leche, queso, mantequillas'
),
( -- second row: values for the columns in the list above
 '11/20/2020', 100, 'Refresco enlatado, embotellado'
),
(
  '11/20/2020', 40 , 'Lipton, Coca Cola enlatada y embotella'
),
(
    '11/15/2020', 40, '40 paquetes de Cafe Maya'
),
(
 '11/20/2020', 50, 'Leche, queso, mantequillas'
),
(
 '11/22/2020', 40, 'Churros'
),
(
 '11/20/2020', 50, 'Aceite, Manteca'
),
(
  '11/28/2020', 40, 'Coca Cola Light, Coca Cola enlatada'
),
(
 '11/27/2020', 40, 'Pollo'
),
(
 '11/20/2020', 50, 'desodorante'
)
-- add more rows here
GO


INSERT INTO areaCredito
( -- columns to insert data into
 [Cantidad],[Fecha], [CreditoAPB]
)
VALUES
( -- first row: values for the columns in the list above
  2,GETDATE(), 55
),
( -- second row: values for the columns in the list above
 3,GETDATE(), 500
),
(
5,GETDATE(), 100
)
-- add more rows here
GO

INSERT INTO Cliente
( -- columns to insert data into
 [Nombre], [Direccion], [Producto], [Telefono], [Saldo]
)
VALUES
( -- first row: values for the columns in the list above
 'Fernando', 'Cofradia Cortes', 'Refrescos', 98322160, 60
),
( -- second row: values for the columns in the list above
 'Hugo', 'Tela', 'Pan', 9515532, 400
),
(
'Maria','Barrio Cabañas', 'Jabon', 95412034, 500
)
GO

IF OBJECT_ID('dbo.Categoria', 'U') IS NOT NULL
DROP TABLE dbo.Categoria
GO

CREATE TABLE dbo.Categoria
(
    id INT NOT NULL IDENTITY(1,1),
    Nombre [NVARCHAR](50) NOT NULL,
    Descripciom [NVARCHAR](50) NOT NULL,
    CONSTRAINT pkCategoria PRIMARY KEY(id)
);
GO

-- Insert rows into table 'Factura'
INSERT INTO Factura
( -- columns to insert data into
 [idCliente], [Fecha], [ValorUnitario], [Subtotal], [ISV], [Total]
)
VALUES
( -- first row: values for the columns in the list above
 5, GETDATE(), 10, 110, 5, 35
),
( -- second row: values for the columns in the list above
 4, GETDATE(), 20, 34, 20, 60
),
(
7, GETDATE(), 14, 60, 80, 40
)
-- add more rows here
GO

INSERT INTO Categoria
(
 [Nombre], [Descripciom]
)
VALUES
(
 'Soda', 'Productos de refrescos'
),
(
 'Hogar', 'Producto para la comodidad de su hogar'
)
GO

-- Select rows from a Table or View 'proveedores' in schema 'SchemaName'
SELECT * FROM dbo.proveedores
--WHERE 	/* add search conditions here */
GO

-- Select rows from a Table or View 'Categoria' in schema 'SchemaName'
SELECT * FROM dbo.Categoria
--WHERE 	/* add search conditions here */
GO

-- Select rows from a Table or View 'fechaEnvio' in schema 'SchemaName'
SELECT * FROM dbo.fechaEnvio
--WHERE 	/* add search conditions here */
GO

-- Select rows from a Table or View 'areacredito' in schema 'SchemaName'
SELECT * FROM dbo.areaCredito
--WHERE 	/* add search conditions here */
GO

-- Select rows from a Table or View 'Cliente' in schema 'SchemaName'
SELECT * FROM dbo.Cliente
--WHERE 	/* add search conditions here */
GO

-- Select rows from a Table'Factura' in schema 'SchemaName'
SELECT * FROM dbo.Factura
--WHERE 	/* add search conditions here */
GO
