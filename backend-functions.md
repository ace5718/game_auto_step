# 後端檔案功能說明文件

## 根目錄檔案

### 入口檔案
- `main.ts`
  - 應用程式的入口點
  - 配置全域中間件
  - 設定 CORS 策略
  - 配置 Swagger API 文檔
  - 設定全域前綴（如 /api）
  - 啟動 HTTP 服務器

### 應用程式核心
- `app.module.ts`
  - 根模組配置
  - 註冊所有子模組
  - 配置全域提供者
  - 導入必要的外部模組
  - 設定環境變數模組

- `app.controller.ts`
  - 處理根路由請求
  - 提供健康檢查端點
  - 基本系統資訊查詢
  - 處理全局錯誤

- `app.service.ts`
  - 提供全局共用服務
  - 處理系統層級的業務邏輯
  - 提供跨模組的公共功能

## 模擬器模組 (simulator)

### 基礎檔案
- `simulator.module.ts`
  - 配置模擬器模組
  - 註冊相關服務和控制器
  - 導入必要的外部模組
  - 設定模組範圍的提供者

- `simulator.controller.ts`
  - 處理模擬器相關的 HTTP 請求
  - 實現 CRUD 操作接口
  - `/api/simulator` 路由處理
  - 主要端點：
    - GET /api/simulator - 取得模擬器列表
    - GET /api/simulator/:id - 取得特定模擬器
    - POST /api/simulator - 創建新模擬器
    - PUT /api/simulator/:id - 更新模擬器
    - DELETE /api/simulator/:id - 刪除模擬器
    - POST /api/simulator/:id/start - 啟動模擬器
    - POST /api/simulator/:id/stop - 停止模擬器
    - GET /api/simulator/:id/status - 取得模擬器狀態

- `simulator.service.ts`
  - 實現模擬器業務邏輯
  - 管理模擬器生命週期
  - 處理模擬器狀態管理
  - 與資料庫交互
  - 處理異步操作和事件
  - 實現模擬器監控功能

### DTO (Data Transfer Objects)
- `create-simulator.dto.ts`
  - 定義創建模擬器需要的數據結構
  - 實現數據驗證規則
  - 例如：
    - 模擬器名稱
    - 模擬器類型
    - 初始配置

- `update-simulator.dto.ts`
  - 定義更新模擬器需要的數據結構
  - 實現局部更新驗證
  - 處理可選字段

### 實體 (Entities)
- `simulator.entity.ts`
  - 定義模擬器資料庫模型
  - 設定資料庫關聯
  - 定義字段類型和驗證
  - 實現實體方法

## 任務模組 (task)

### 基礎檔案
- `task.module.ts`
  - 配置任務模組
  - 註冊相關服務和控制器
  - 設定任務調度器
  - 配置任務隊列

- `task.controller.ts`
  - 處理任務相關的 HTTP 請求
  - 實現任務管理接口
  - `/api/task` 路由處理
  - 主要端點：
    - GET /api/task - 取得任務列表
    - GET /api/task/:id - 取得特定任務
    - POST /api/task - 創建新任務
    - PUT /api/task/:id - 更新任務
    - DELETE /api/task/:id - 刪除任務
    - POST /api/task/:id/execute - 執行任務
    - POST /api/task/:id/stop - 停止任務
    - GET /api/task/:id/status - 取得任務狀態
    - GET /api/task/:id/log - 取得任務日誌

- `task.service.ts`
  - 實現任務業務邏輯
  - 管理任務執行生命週期
  - 處理任務調度邏輯
  - 實現任務隊列管理
  - 處理任務日誌記錄
  - 提供任務執行狀態監控

### DTO
- `create-task.dto.ts`
  - 定義創建任務需要的數據結構
  - 實現任務參數驗證
  - 例如：
    - 任務名稱
    - 任務類型
    - 執行參數
    - 調度設定

- `update-task.dto.ts`
  - 定義更新任務需要的數據結構
  - 實現任務參數更新驗證
  - 處理可選更新字段

### 實體
- `task.entity.ts`
  - 定義任務資料庫模型
  - 設定與模擬器的關聯
  - 定義任務狀態和日誌
  - 實現任務相關方法

## 連線模組 (connection)

### 基礎檔案
- `connection.module.ts`
  - 配置連線模組
  - 註冊相關服務和控制器
  - 配置 WebSocket 支持
  - 設定連線池管理

- `connection.controller.ts`
  - 處理連線相關的 HTTP 請求
  - 實現連線管理接口
  - `/api/connection` 路由處理
  - 主要端點：
    - GET /api/connection - 取得所有連線
    - GET /api/connection/:id - 取得特定連線
    - POST /api/connection - 建立新連線
    - PUT /api/connection/:id - 更新連線
    - DELETE /api/connection/:id - 關閉連線
    - GET /api/connection/:id/status - 取得連線狀態
    - POST /api/connection/:id/test - 測試連線

- `connection.service.ts`
  - 實現連線業務邏輯
  - 管理連線池
  - 處理連線生命週期
  - 實現重連機制
  - 提供連線狀態監控
  - 處理連線事件

### DTO
- `create-connection.dto.ts`
  - 定義創建連線需要的數據結構
  - 實現連線參數驗證
  - 例如：
    - 連線類型
    - 目標地址
    - 驗證資訊
    - 連線選項

- `update-connection.dto.ts`
  - 定義更新連線需要的數據結構
  - 實現連線參數更新驗證
  - 處理可選更新字段

### 實體
- `connection.entity.ts`
  - 定義連線資料庫模型
  - 設定與模擬器的關聯
  - 記錄連線狀態和歷史
  - 實現連線相關方法

## 測試檔案

### 控制器測試
- `*.controller.spec.ts`
  - 測試 HTTP 端點功能
  - 驗證請求處理邏輯
  - 測試參數驗證
  - 測試權限控制
  - 測試錯誤處理

### 服務測試
- `*.service.spec.ts`
  - 測試業務邏輯
  - 測試資料處理
  - 測試異步操作
  - 測試錯誤處理
  - 測試邊界條件