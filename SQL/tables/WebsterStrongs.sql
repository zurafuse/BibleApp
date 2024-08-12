USE [Bible]
GO

/****** Object:  Table [dbo].[WebsterStrongs]    Script Date: 8/12/2024 2:06:43 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[WebsterStrongs](
	[id] [varchar](15) NOT NULL,
	[verse] [int] NOT NULL,
	[chapter] [int] NOT NULL,
	[book] [int] NOT NULL,
	[eng] [nvarchar](500) NULL,
	[item] [int] NOT NULL
) ON [PRIMARY]
GO

