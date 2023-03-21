module.exports = {
  types: [
    { value: "feat", name: "feat: 增加" },
    { value: "docs", name: "docs: 修改文件" },
    { value: "del", name: "del: 刪除" },
  ],
  scopes: [{ name: "Documents" }, { name: "Other" }],
  messages: {
    type: "選擇更改類型:\n",
    scope: "選擇 scope（Options）：\n",
    customScope: "請輸入自定義的 scope：",
    subject: "簡述:\n",
    confirmCommit: "確定送出?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
};
