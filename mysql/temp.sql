-- 使用者管理
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role ENUM('admin', 'operator', 'viewer') NOT NULL,
    status BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 模擬器管理
CREATE TABLE simulators (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    config JSON,  -- 儲存模擬器配置
    status ENUM('running', 'stopped', 'error') DEFAULT 'stopped',
    created_by BIGINT UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- 連線管理
CREATE TABLE connections (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    simulator_id BIGINT UNSIGNED NOT NULL,
    type VARCHAR(50) NOT NULL,
    host VARCHAR(255) NOT NULL,
    port INT NOT NULL,
    username VARCHAR(50),
    password VARCHAR(255),
    status ENUM('connected', 'disconnected', 'error') DEFAULT 'disconnected',
    last_connected_at TIMESTAMP,
    config JSON,  -- 儲存連線配置
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (simulator_id) REFERENCES simulators(id)
);

-- 任務管理
CREATE TABLE tasks (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    simulator_id BIGINT UNSIGNED NOT NULL,
    type VARCHAR(50) NOT NULL,
    status ENUM('pending', 'running', 'completed', 'failed') DEFAULT 'pending',
    schedule_type ENUM('once', 'recurring') NOT NULL,
    schedule_config JSON,  -- 儲存排程配置
    params JSON,  -- 儲存任務參數
    created_by BIGINT UNSIGNED,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (simulator_id) REFERENCES simulators(id),
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- 日誌記錄
CREATE TABLE logs (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    type ENUM('simulator', 'connection', 'task', 'system') NOT NULL,
    level ENUM('info', 'warning', 'error') NOT NULL,
    reference_id BIGINT UNSIGNED,  -- 關聯到相應的模擬器、連線或任務
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 操作審計
CREATE TABLE audit_trails (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    action VARCHAR(50) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id BIGINT UNSIGNED NOT NULL,
    details JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 模擬器表索引
CREATE INDEX idx_simulators_status ON simulators(status);
CREATE INDEX idx_simulators_type ON simulators(type);

-- 連線表索引
CREATE INDEX idx_connections_status ON connections(status);
CREATE INDEX idx_connections_simulator ON connections(simulator_id);

-- 任務表索引
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_simulator ON tasks(simulator_id);
CREATE INDEX idx_tasks_created_by ON tasks(created_by);

-- 日誌表索引
CREATE INDEX idx_logs_type ON logs(type);
CREATE INDEX idx_logs_level ON logs(level);
CREATE INDEX idx_logs_created_at ON logs(created_at);

-- 審計表索引
CREATE INDEX idx_audit_user ON audit_trails(user_id);
CREATE INDEX idx_audit_entity ON audit_trails(entity_type, entity_id);

