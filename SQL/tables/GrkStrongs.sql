USE [Bible]
GO

/****** Object:  Table [dbo].[GrkStrongs]    Script Date: 8/12/2024 2:06:00 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[GrkStrongs](
	[id] [nvarchar](15) NOT NULL,
	[beta] [nvarchar](63) NULL,
	[pron] [nvarchar](63) NULL,
	[xlit] [nvarchar](63) NULL,
	[word] [nvarchar](63) NULL,
	[strongsdef] [nvarchar](511) NULL,
	[kjvdef] [nvarchar](1023) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

