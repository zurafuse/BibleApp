USE [Bible]
GO

/****** Object:  Table [dbo].[HebStrongs]    Script Date: 8/12/2024 2:06:21 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HebStrongs](
	[id] [nvarchar](15) NOT NULL,
	[pos] [nvarchar](31) NULL,
	[pron] [nvarchar](63) NULL,
	[xlit] [nvarchar](63) NULL,
	[lang] [nvarchar](15) NULL,
	[word] [nvarchar](63) NULL,
	[note] [nvarchar](255) NULL,
	[source] [nvarchar](400) NULL,
	[meaning] [nvarchar](1023) NULL,
	[usage] [nvarchar](1023) NULL
) ON [PRIMARY]
GO

