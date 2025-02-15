﻿### 回答規則
總是使用中文回答、
產生或修改的檔案前端加上位置的註解、
產生的程式加上註解。

### 1. 程式檔案規則
- 設計時將前後端完全拆開
- 能使用官方cli建立文件檔案時，使用 yarn 建立
- 沒有給出詳細的功能時都，先以能夠還傳參數為基準
### 1-1. 前端(Frontend)技術棧
- prot：50000~54999
- Next.js 15
- App router
- React 19
- TypeScript 5
### 1-2. 後端(Backend)技術棧
- prot：55000~59999
- Nest.js 
- MVC 架構

- # 資料庫表格功能說明文件

## 1. users (使用者資料表)
負責管理系統使用者的基本資訊和權限控制。
### 主要欄位功能：
- id：使用者系統唯一識別碼
- username：使用者登入帳號
- password：使用者加密後的登入密碼
- email：使用者電子郵件，用於系統通知
- role：使用者角色權限控制
- status：帳號狀態控制，可停用帳號
- created_at：帳號建立時間記錄
- updated_at：資料更新時間記錄

## 2. simulators (模擬器資料表)
管理系統中所有模擬器的基本資訊和運行狀態。
### 主要欄位功能：
- id：模擬器唯一識別碼
- name：模擬器名稱，用於顯示和識別
- type：模擬器類型，區分不同功能的模擬器
- description：模擬器用途說明
- config：模擬器的詳細配置參數
- status：模擬器當前運行狀態
- created_by：記錄建立者，用於追蹤責任
- created_at/updated_at：時間戳記錄

## 3. connections (連線資料表)
管理模擬器與外部系統的連線設定和狀態。
### 主要欄位功能：
- id：連線唯一識別碼
- simulator_id：關聯的模擬器識別碼
- type：連線類型，定義連線協議
- host/port：連線目標位址和埠口
- username/password：連線認證資訊
- status：連線即時狀態
- last_connected_at：最後連線時間，用於監控
- config：連線相關的配置參數
- created_at/updated_at：時間戳記錄

## 4. tasks (任務資料表)
管理模擬器相關的任務排程和執行狀態。
### 主要欄位功能：
- id：任務唯一識別碼
- name：任務名稱
- simulator_id：關聯的模擬器
- type：任務類型
- status：任務執行狀態
- schedule_type：排程類型（單次/重複）
- schedule_config：排程詳細設定
- params：任務執行參數
- created_by：任務建立者
- started_at/completed_at：執行時間記錄
- created_at/updated_at：時間戳記錄

## 5. logs (日誌資料表)
記錄系統各個部分的運行日誌。
### 主要欄位功能：
- id：日誌唯一識別碼
- type：日誌來源類型
- level：日誌重要程度
- reference_id：關聯對象ID
- message：日誌詳細內容
- created_at：日誌產生時間

## 6. audit_trails (操作審計資料表)
記錄系統中的重要操作，用於安全審計。
### 主要欄位功能：
- id：審計記錄唯一識別碼
- user_id：執行操作的使用者
- action：執行的操作類型
- entity_type：操作對象類型
- entity_id：操作對象識別碼
- details：操作的詳細內容
- created_at：操作執行時間

## 表格關聯說明
1. users -> simulators：
   - 一個使用者可以建立多個模擬器
   - 追蹤模擬器的建立者

2. simulators -> connections：
   - 一個模擬器可以有多個連線
   - 連線必須關聯到特定模擬器

3. simulators -> tasks：
   - 一個模擬器可以有多個任務
   - 任務必須關聯到特定模擬器

4. users -> tasks：
   - 一個使用者可以建立多個任務
   - 追蹤任務的建立者

5. logs/audit_trails -> 其他表：
   - 通過 reference_id/entity_id 關聯到相應的記錄
   - 用於追蹤和審計
