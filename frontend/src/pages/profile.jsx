import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe } from "../service/auth";
import useUser from "../hooks/useUser";
import { updateUser } from "../service/user";
import { toast } from "sonner";
import { getFile, uploadFile } from "../service/upload";

const Profile = () => {
  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (body) => updateUser(body.id, body),
    onSuccess: () => {
      toast.success("Cập nhật thành công");
      queryClient.invalidateQueries(["me"]);
    },
  });

  const { userInfo } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    mutate({
      ...userInfo,
      ...data,
    });
  };

  const handleUploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const file = formData.get("file");
    const fileName = await uploadFile(file);

    mutate({
      ...userInfo,
      avatar: fileName,
    });
  };

  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Thông tin</h2>
            </div>
            <div className="col-12">
              <Link to="/">Trang chủ</Link>
              <Link to="/profile">Thông tin</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h3>Update Profile</h3>
              </div>
              <div className="card-body p-4">
                {data && (
                  <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Tên đầy đủ
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        defaultValue={data?.fullName}
                        name="fullName"
                        className="form-control"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={data?.email}
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* Code */}
                    <div className="mb-3">
                      <label htmlFor="code" className="form-label">
                        CMND
                      </label>
                      <input
                        name="code"
                        type="text"
                        defaultValue={data?.code}
                        id="code"
                        className="form-control"
                        placeholder="Enter your code"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Số điện thoại
                      </label>
                      <input
                        name="phoneNumber"
                        type="tel"
                        defaultValue={data?.phoneNumber}
                        id="phoneNumber"
                        className="form-control"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Avatar */}
                    {/* <div className="mb-3">
                  <label htmlFor="avatar" className="form-label">
                    Avatar
                  </label>
                  <input type="file" id="avatar" className="form-control" />
                </div> */}

                    {/* Submit Button */}
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Cập nhật
                      </button>
                    </div>
                  </form>
                )}

                {data && (
                  <form onSubmit={handleUploadFile}>
                    {/* Avatar */}
                    <div className="mb-3">
                      <label htmlFor="avatar" className="form-label">
                        Ảnh đại diện
                      </label>

                      {data.avatar && (
                        <div
                          className="p-4"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={getFile(data.avatar)}
                            alt=""
                            className="img-fluid"
                            style={{
                              borderRadius: "100%",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </div>
                      )}
                      <input
                        type="file"
                        name="file"
                        id="avatar"
                        className="form-control"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Cập nhật
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
