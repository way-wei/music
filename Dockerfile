# 使用官方的 Node.js 作為基礎映像
FROM node:lts-alpine

# 設置工作目錄
WORKDIR /app

# 安裝依賴
COPY package.json .
COPY package-lock.json .
RUN npm install

# 複製代碼
COPY . .

# 構建前端應用
RUN npm run build

# 服務運行的端口
EXPOSE 3000

# 啟動命令
CMD ["npm", "run", "serve"]
