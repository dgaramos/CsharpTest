
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 07/14/2018 01:39:48
-- Generated from EDMX file: C:\Users\Danilo\AspNET\C-Test\CsharpTest\INDRA_TEST\Models\INDRA_TEST.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [INDRA_TEST];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Produto]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Produto];
GO
IF OBJECT_ID(N'[dbo].[Venda]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Venda];
GO
IF OBJECT_ID(N'[dbo].[VendaProduto]', 'U') IS NOT NULL
    DROP TABLE [dbo].[VendaProduto];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Produto'
CREATE TABLE [dbo].[Produto] (
    [IdProduto] int IDENTITY(1,1) NOT NULL,
    [Descricao] nvarchar(50)  NOT NULL,
    [Qntd] int  NOT NULL,
    [DataFab] datetime  NOT NULL,
    [Preco] decimal(19,4)  NOT NULL
);
GO

-- Creating table 'Venda'
CREATE TABLE [dbo].[Venda] (
    [IdVenda] int IDENTITY(1,1) NOT NULL,
    [ValorTotal] decimal(19,4)  NOT NULL,
    [Data] datetime  NULL
);
GO

-- Creating table 'VendaProduto'
CREATE TABLE [dbo].[VendaProduto] (
    [IdVendaProduto] int IDENTITY(1,1) NOT NULL,
    [Qntd] int  NOT NULL,
    [Produto_IdProduto] int  NOT NULL,
    [Venda_IdVenda] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [IdProduto] in table 'Produto'
ALTER TABLE [dbo].[Produto]
ADD CONSTRAINT [PK_Produto]
    PRIMARY KEY CLUSTERED ([IdProduto] ASC);
GO

-- Creating primary key on [IdVenda] in table 'Venda'
ALTER TABLE [dbo].[Venda]
ADD CONSTRAINT [PK_Venda]
    PRIMARY KEY CLUSTERED ([IdVenda] ASC);
GO

-- Creating primary key on [IdVendaProduto] in table 'VendaProduto'
ALTER TABLE [dbo].[VendaProduto]
ADD CONSTRAINT [PK_VendaProduto]
    PRIMARY KEY CLUSTERED ([IdVendaProduto] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Produto_IdProduto] in table 'VendaProduto'
ALTER TABLE [dbo].[VendaProduto]
ADD CONSTRAINT [FK_ProdutoVendaProduto]
    FOREIGN KEY ([Produto_IdProduto])
    REFERENCES [dbo].[Produto]
        ([IdProduto])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProdutoVendaProduto'
CREATE INDEX [IX_FK_ProdutoVendaProduto]
ON [dbo].[VendaProduto]
    ([Produto_IdProduto]);
GO

-- Creating foreign key on [Venda_IdVenda] in table 'VendaProdutoes'
ALTER TABLE [dbo].[VendaProduto]
ADD CONSTRAINT [FK_VendaProdutoVenda]
    FOREIGN KEY ([Venda_IdVenda])
    REFERENCES [dbo].[Venda]
        ([IdVenda])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_VendaProdutoVenda'
CREATE INDEX [IX_FK_VendaProdutoVenda]
ON [dbo].[VendaProduto]
    ([Venda_IdVenda]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------