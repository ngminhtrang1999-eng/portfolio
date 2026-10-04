# Portfolio cá nhân

Website portfolio một trang, dùng cho **phỏng vấn thực tập/việc làm** và **ứng tuyển học bổng**.

Xây trên template mã nguồn mở [devportfolio](https://github.com/RyanFitzgerald/devportfolio)
(Astro + Tailwind CSS), đã bổ sung thêm mục **Awards** (giải thưởng/cuộc thi),
**Courses** (chứng chỉ) và nút **Download CV**.

- **Toàn bộ nội dung nằm trong một file duy nhất:** `src/config.ts`
- **Không cần server, không cần database** — build ra HTML tĩnh, host miễn phí trên GitHub Pages
- **Đa số thao tác chỉ là sửa chữ**, không cần đụng vào code giao diện

---

## 1. Chạy thử trên máy

Cần **Node.js 20 trở lên** ([tải tại đây](https://nodejs.org/)).

```bash
npm install     # chỉ chạy lần đầu
npm run dev     # mở http://localhost:4321
```

Sửa file → trình duyệt tự cập nhật ngay.

Kiểm tra trước khi đẩy lên GitHub:

```bash
npm run build     # phải chạy xong không báo lỗi
npm run preview   # xem thử bản build thật
```

> Nếu `npm install` báo lỗi `EPERM` ở thư mục cache, chạy lại bằng:
> `npm install --cache ./.npm-cache`

---

## 2. Sửa nội dung — chỉ cần mở `src/config.ts`

| Muốn đổi gì | Sửa ở đâu trong `src/config.ts` |
| --- | --- |
| Tên, chức danh, mô tả trang | `name`, `title`, `description` |
| Màu chủ đạo của cả site | `accentColor` (mã màu HEX) |
| File CV | `resumeUrl` |
| Email, LinkedIn, GitHub | `social` |
| Đoạn giới thiệu bản thân | `aboutMe` |
| Các kỹ năng (hiện thành thẻ nhỏ) | `skills` |
| **Dự án** | `projects` |
| **Giải thưởng / cuộc thi / học bổng** | `awards` |
| Kinh nghiệm làm việc, thực tập | `experience` |
| Học vấn | `education` |
| Chứng chỉ, khóa học online | `certifications` |

**Mọi mục đều là tùy chọn.** Xóa (hoặc để trống) một mảng thì mục đó tự biến mất
khỏi trang **và** khỏi thanh điều hướng. Ví dụ chưa có kinh nghiệm làm việc thì
xóa hẳn `experience` — site vẫn đẹp, không có khoảng trống.

Các chỗ còn là nội dung mẫu đều có chữ `— replace me`. Tìm nhanh bằng:

```bash
grep -rn "replace me" src/config.ts
```

### Thêm một dự án mới

Mở `src/config.ts`, thêm vào mảng `projects`:

```ts
{
  name: "Tên dự án",
  description:
    "Một câu nói dự án làm gì và cho ai, một câu nói kết quả đạt được (số người dùng, độ chính xác, thời gian tiết kiệm, thứ hạng).",
  link: "https://github.com/username/repo",   // không có link công khai thì xóa dòng này
  skills: ["Python", "FastAPI", "PostgreSQL"], // công cụ bạn thực sự dùng
},
```

**Thứ tự quan trọng:** dự án đầu tiên hiện là `01` ở trên cùng. Đặt dự án mạnh
nhất lên đầu.

**Chỉ nên để 3–5 dự án.** Một dự án yếu nằm cạnh dự án mạnh sẽ làm loãng cả hai.
Nên chọn theo tiêu chí: dự án nào chứng minh đúng kỹ năng mà vị trí/học bổng bạn
nhắm tới cần.

**Cách viết mô tả** (quan trọng hơn cả code): mỗi mô tả nên trả lời — giải quyết
vấn đề gì, *bạn* làm phần nào, kết quả ra sao. Ví dụ:

- ❌ "Web app quản lý dữ liệu"
- ✅ "Giảm thời gian nhập liệu thủ công từ 2 giờ xuống 5 phút cho câu lạc bộ 40 thành viên"

### Thay file CV

`public/resume.pdf` hiện là **file PDF mẫu**. Chỉ cần ghi đè bằng CV thật của bạn
(giữ nguyên tên file) là nút Download CV hoạt động ngay.

Nếu muốn để CV trên Google Drive: đổi `resumeUrl` thành link `https://...` đầy đủ.
Muốn ẩn nút: đặt `resumeUrl: ""`.

---

## 3. Đưa lên GitHub

### Bước 1 — tạo repository

Vào [github.com/new](https://github.com/new), tạo repo (ví dụ tên `portfolio`),
**để chế độ Public**, và **không** tích "Add a README file".

### Bước 2 — đẩy code lên

```bash
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/<username>/portfolio.git
git push -u origin main
```

Thay `<username>` bằng tên tài khoản GitHub của bạn.

### Bước 3 — bật GitHub Pages

Trên trang repository: **Settings → Pages → Build and deployment → Source**,
chọn **GitHub Actions**.

Sau khoảng 1 phút, site sẽ có tại:

```
https://<username>.github.io/portfolio/
```

Vào tab **Actions** để xem tiến trình deploy. Từ giờ **mỗi lần push lên `main`,
site tự động cập nhật** — bạn không phải làm gì thêm.

> Bạn không cần cấu hình đường dẫn thủ công. `astro.config.mjs` tự nhận diện
> repo của bạn là dạng `username.github.io` hay dạng thư mục con `/portfolio`,
> nên site chạy đúng trong cả hai trường hợp.

### Cách nhanh bằng GitHub CLI (thay cho 3 bước trên)

Nếu đã cài [GitHub CLI](https://cli.github.com/) (`winget install --id GitHub.cli -e`),
chỉ cần 3 lệnh:

```bash
gh auth login                                          # đăng nhập 1 lần qua trình duyệt
gh repo create <username>/portfolio --public --source=. --remote=origin --push
gh api -X POST repos/<username>/portfolio/pages -f build_type=workflow
```

- Lệnh 1 mở trình duyệt để uỷ quyền. **Phải có scope `workflow`**, nếu không GitHub
  sẽ chặn push file `.github/workflows/deploy.yml`. Kiểm tra bằng `gh auth status`.
- Lệnh 2 tạo repo, gắn remote `origin` và push nhánh `main` trong một lần.
- Lệnh 3 bật Pages với Source = **GitHub Actions** (tương đương thao tác trong Settings).

Sau đó xem tiến trình deploy:

```bash
gh run list --limit 5
gh run watch
```

Site sẽ ở `https://<username>.github.io/portfolio/`.

---

## 4. Việc cần làm tiếp

- [ ] Điền thông tin thật vào `src/config.ts` (bỏ hết chữ `— replace me`)
- [ ] Thay `public/resume.pdf` bằng CV thật
- [ ] Chọn lọc 3–5 dự án mạnh nhất
- [ ] Thêm giải thưởng/cuộc thi đã tham gia
- [ ] Tạo repo GitHub và push
- [ ] Bật GitHub Pages (Settings → Pages → Source = GitHub Actions)
- [ ] Dán link portfolio vào CV và hồ sơ LinkedIn

---

## 5. Lưu ý quan trọng về vị trí thư mục

Project này hiện nằm trong **OneDrive** (`Desktop\portfolio`). OneDrive sẽ đồng bộ
cả thư mục `node_modules` — hàng chục nghìn file, rất chậm và có thể gây lỗi build
do file bị khóa giữa lúc sync.

**Nên chuyển project ra ngoài OneDrive** để làm việc hàng ngày, ví dụ:

```powershell
mkdir C:\dev
robocopy "C:\Users\trang\OneDrive\Desktop\portfolio" "C:\dev\portfolio" /E /XD node_modules .npm-cache dist
cd C:\dev\portfolio
npm install
```

Code vẫn được backup đầy đủ trên GitHub sau khi bạn push, nên không cần OneDrive
đồng bộ thư mục này nữa.

---

## 6. Dành cho AI agent / session sau

Xem **`AGENTS.md`** — hướng dẫn đầy đủ về kiến trúc, cách thêm section, các lỗi
thường gặp và quy trình kiểm tra. Mọi thao tác thêm dự án/giải thưởng đều đã có
công thức sẵn trong đó.

---

## Giấy phép

Template gốc: MIT © Ryan Fitzgerald. Phần tùy biến thuộc về bạn.
